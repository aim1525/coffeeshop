import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800/90 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

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

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block mb-2 text-gray-300 text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        <button
          type="submit"
          className="w-full py-3 mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl shadow-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-300">
          Don’t have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer font-semibold"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}
