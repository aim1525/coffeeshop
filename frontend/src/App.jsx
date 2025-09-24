import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import React from "react";

import Menu from "./Component/Page/Menu";
import Services from "./Component/Page/Services";
import Blog from "./Component/Page/Blog";
import About from "./Component/Page/About";
import Shop from "./Component/Page/Shop";
import Contact from "./Component/Page/Contact";
import Hero from "./Component/Page/Hero";
import Login from "./Component/Page/LogIn";
import SignupForm from "./Component/Page/Signup";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* Future expansion */}
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/checkout" element={<div>Checkout Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
