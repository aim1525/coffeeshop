import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName || !phone || !email || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!isOtpSent) {
      const newOtp = Math.floor(100000 + Math.random() * 900000);
      setGeneratedOtp(newOtp);
      setIsOtpSent(true);
      alert(`Your OTP is: ${newOtp}`);
      return;
    }

    if (parseInt(otp) !== generatedOtp) {
      alert("Invalid OTP");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ fullName, email, phone, password })
    );

    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white px-4">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800/90 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-2xl border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter 10-digit phone"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block mb-2 text-gray-300 text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-4 top-11 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-5 relative">
          <label className="block mb-2 text-gray-300 text-sm">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-4 top-11 cursor-pointer text-gray-400"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* OTP */}
        {isOtpSent && (
          <div className="mb-5">
            <label className="block mb-2 text-gray-300 text-sm">Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl shadow-lg"
        >
          {isOtpSent ? "Verify OTP" : "Signup"}
        </button>

        <p className="text-center text-gray-300">
          Already have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
