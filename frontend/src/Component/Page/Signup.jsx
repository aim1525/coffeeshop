import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../api";

export default function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName || !phone || !email || !password || !confirmPassword) {
      toast.error("⚠️ Please fill all required fields");
      return;
    }
    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("❌ Passwords do not match");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error("📞 Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      await API.post("/register", { fullName, email, phone, password });
      toast.success("🎉 Signup successful! Check your email to verify.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Create Account
        </h2>

        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Full Name</label>
          <input
            type="text"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Email</label>
          <input
            type="email"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-gray-300 text-sm">Phone</label>
          <input
            type="tel"
            className="w-full py-3 px-4 rounded-xl bg-gray-700 border border-gray-600 text-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-5 relative">
          <label className="block mb-2 text-gray-300 text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
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

        <div className="mb-5 relative">
          <label className="block mb-2 text-gray-300 text-sm">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
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

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mb-4 bg-yellow-500 text-black font-bold rounded-xl shadow-lg"
        >
          {loading ? "Creating..." : "Signup"}
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

      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
    </div>
  );
}
