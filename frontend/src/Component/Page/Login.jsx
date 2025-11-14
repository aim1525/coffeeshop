import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Fill all fields");

    try {
      const res = await API.post("/login", { email, password });
      toast.success(res.data.message);
      setTimeout(() => navigate("/hero"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-10 rounded-xl shadow-xl w-[400px] max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>

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

        <button
          type="submit"
          className="w-full py-3 mb-4 bg-yellow-500 text-black font-bold rounded-xl shadow-lg"
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

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}
