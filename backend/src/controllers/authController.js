const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const emailToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({ fullName, email, phone, password: hashedPassword, emailToken });
    await newUser.save();

    const verifyUrl = `${process.env.CLIENT_URL}/verify/${emailToken}`;
    const message = `<h2>Hello ${fullName}</h2>
      <p>Click below to verify your email:</p>
      <a href="${verifyUrl}">Verify Email</a>`;

    await sendEmail(email, "Verify your email", message);

    res.status(201).json({ message: "Registration successful. Please verify your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ emailToken: token });
    if (!user) return res.status(400).send("Invalid token");

    user.isVerified = true;
    user.emailToken = null;
    await user.save();

    res.send("Email verified successfully! You can now login.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    if (!user.isVerified) return res.status(401).json({ message: "Please verify your email first" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, verifyEmail, login };
