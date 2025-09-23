import { useState, useEffect } from "react";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 text-white"> 
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-widest leading-tight pl-6 md:pl-0">
          COFFEE
          <span className="block text-sm font-normal tracking-[0.25em] text-gray-300">
            BLEND
          </span>
        </h1>

        {/* Navigation & Icons */}
        <div className="flex items-center gap-18 ml-70">
          <ul className="hidden md:flex uppercase text-xl font-medium py-6 gap-20">
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
                  className="relative transition duration-300 hover:text-yellow-500"
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
                <ul className="absolute right-0 mt-3 bg-black/90 text-white rounded-lg shadow-lg w-40 py-2">
                  <li>
                    <Link
                      to="/shop"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/checkout"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="relative cursor-pointer flex items-center">
            <ShoppingCart className="w-6 h-6 hover:text-yellow-500 transition" />
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs font-semibold rounded-full px-1.5">
              1
            </span>
          </div>

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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-center py-6">
          <ul className="flex flex-col gap-8 uppercase font-medium text-white text-base">
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
                  className="block hover:text-yellow-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <details>
                <summary className="cursor-pointer hover:text-yellow-500">
                  Shop
                </summary>
                <ul className="mt-2">
                  <li>
                    <Link
                      to="/shop"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/checkout"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
