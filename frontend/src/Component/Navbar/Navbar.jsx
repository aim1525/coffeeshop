import { useState, useEffect } from "react";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    toast.info("👋 Logged out successfully!", { position: "top-right" });
    navigate("/");
  };

  const handleLoginNotify = () => {
    toast.success("✅ Redirecting to login...", { position: "top-right" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 text-white">
          {/* Logo */}
          <h1 className="text-4xl font-bold tracking-widest leading-tight pl-6 md:pl-0 animate__animated animate__fadeInDown">
            COFFEE
            <span className="block text-sm font-normal tracking-[0.25em] text-gray-300">
              BLEND
            </span>
          </h1>

          {/* Nav Links */}
          <div className="flex items-center gap-10 ml-20">
            <ul className="hidden md:flex uppercase text-xl font-medium py-6 gap-16">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="relative transition duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Shop Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button className="relative transition duration-300 hover:text-yellow-500 uppercase">
                  Shop
                </button>
                {shopOpen && (
                  <ul className="absolute right-0 mt-3 bg-black/90 text-white rounded-lg shadow-lg w-40 py-2 animate__animated animate__fadeIn">
                    <li>
                      <Link
                        to="/shop"
                        className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/checkout"
                        className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Cart */}
            <div className="relative cursor-pointer flex items-center animate__animated animate__fadeInRight">
              <ShoppingCart className="w-6 h-6 hover:text-yellow-500 transition-colors duration-300" />
              <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs font-semibold rounded-full px-1.5">
                1
              </span>
            </div>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                onClick={handleLoginNotify}
                className="relative overflow-hidden px-6 py-2 rounded-[4px] font-bold shadow-lg text-xl
                bg-yellow-500 text-white transition-all duration-500 hover:scale-105
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-1000"
              >
                <span className="relative z-10">Login</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="relative overflow-hidden px-6 py-2 rounded-xl font-bold shadow-lg 
                bg-red-600 text-white 
                transition-all duration-300 
                hover:scale-105
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:to-red-700 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">Logout</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Toastify Container */}
      <ToastContainer />
    </>
  );
}
