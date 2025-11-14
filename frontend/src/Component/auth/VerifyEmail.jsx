import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Verify() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await API.get(`/verify/${token}`);
        toast.success("✅ Email verified successfully! You can login now.");
        setTimeout(() => navigate("/login"), 5000);
      } catch (err) {
        toast.error(err.response?.data || "Verification failed");
      } finally {
        setLoading(false);
      }
    };
    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {loading ? <p>Verifying your email...</p> : <p>Done!</p>}
      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
    </div>
  );
}
