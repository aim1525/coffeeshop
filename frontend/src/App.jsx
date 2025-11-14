import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import LoginForm from "./Component/Page/Login";
import SignupForm from "./Component/Page/Signup";
import VerifyEmail from "./Component/auth/VerifyEmail";
import Dashboard from "./Component/Dashboard";
import Hero from "./Component/Page/Hero";

export default function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />

        {/* Protected / Test page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hero" element={<Hero />} />

        {/* Default */}
        <Route path="*" element={<Hero />} />
      </Routes>
  );
}
