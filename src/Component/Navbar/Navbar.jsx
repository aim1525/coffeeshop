import { useState, useEffect } from "react";
import React from "react";
import { ShoppingCart } from "lucide-react";

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
        <div className="flex items-center gap-18 ml-70"> {/* push everything as far right as possible */}
          <ul className="hidden md:flex uppercase text-xl font-medium py-6 gap-20">
            {["Home", "Menu", "Services", "Blog", "About", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative transition duration-300 hover:text-yellow-500 "
                  >
                    {item}
                  </a>
                </li>
              )
            )}

            <li
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="relative transition duration-300 hover:text-yellow-500 uppercase
              ">
                Shop
              </button>
              {shopOpen && (
                <ul className="absolute right-0 mt-3 bg-black/90 text-white rounded-lg shadow-lg w-40 py-2"> {/* dropdown aligned to right */}
                  <li>
                    <a
                      href="#products"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cart"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#checkout"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Checkout
                    </a>
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
            {["Home", "Menu", "Services", "Blog", "About", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-yellow-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li>
              <details>
                <summary className="cursor-pointer hover:text-yellow-500">
                  Shop
                </summary>
                <ul className="mt-2">
                  <li>
                    <a
                      href="#products"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cart"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#checkout"
                      className="block py-1 hover:text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      Checkout
                    </a>
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
