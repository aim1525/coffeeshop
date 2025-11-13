import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";

export default function Shop() {
  const [activeTab, setActiveTab] = useState("Coffee");
  const [selectedProduct, setSelectedProduct] = useState(null); // For product detail view
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");

  // ===== MENU DATA =====
  const menuData = {
    Coffee: [
      {
        name: "Coffee Capuccino",
        desc: "A small river named Duden flows by their place and supplies",
        price: "$5.90",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      },
      {
        name: "Coffee Capuccino",
        desc: "A small river named Duden flows by their place and supplies",
        price: "$5.90",
        img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
      },
      {
        name: "Coffee Capuccino",
        desc: "A small river named Duden flows by their place and supplies",
        price: "$5.90",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
      },
      {
        name: "Coffee Capuccino",
        desc: "A small river named Duden flows by their place and supplies",
        price: "$5.90",
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      },
    ],
    "Main Dish": [
      {
        name: "Grilled Beef",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        price: "$2.90",
        img: "https://images.unsplash.com/photo-1604909052951-7d02b3d6f2d4",
      },
      {
        name: "Grilled Beef",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        price: "$2.90",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      },
      {
        name: "Grilled Beef",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        price: "$2.90",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      },
    ],
    Drinks: [
      {
        name: "Iced Coffee",
        desc: "Cool and refreshing drink made from cold brewed coffee.",
        price: "$3.50",
        img: "https://images.unsplash.com/photo-1527169402691-feff5539e52c",
      },
    ],
    Desserts: [
      {
        name: "Chocolate Cake",
        desc: "Rich chocolate sponge layered with ganache and topped with cream.",
        price: "$4.90",
        img: "https://images.unsplash.com/photo-1601972599720-b1a27b9414e5",
      },
    ],
  };

  // ===== RELATED PRODUCTS (for detail view) =====
  const relatedProducts = [
    {
      id: 1,
      title: "Coffee Capuccino",
      price: "$5.90",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      id: 2,
      title: "Coffee Capuccino",
      price: "$5.90",
      img: "https://images.unsplash.com/photo-1523942839745-7848d4f3e23d",
    },
    {
      id: 3,
      title: "Coffee Capuccino",
      price: "$5.90",
      img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    },
    {
      id: 4,
      title: "Coffee Capuccino",
      price: "$5.90",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    },
  ];

  // ===== HERO SECTION =====
  const HeroSection = ({ title, subtitle, bg }) => (
    <section
      className="h-[80vh] bg-center bg-cover flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-semibold mb-3 tracking-wide">{title}</h1>
        <p className="uppercase text-gray-300 text-sm">
          <span className="text-yellow-500">Home</span> / {subtitle}
        </p>
      </div>
    </section>
  );

  // ===== SHOP PAGE =====
  const ShopPage = () => (
    <div>
      <HeroSection
        title="ORDER ONLINE"
        subtitle="Shop"
        bg="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
      />

      <div className="max-w-6xl mx-auto py-20 px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium border-b-2 transition duration-300 ${
                activeTab === tab
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent text-gray-400 hover:text-yellow-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#141210] p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md mb-4"
                onClick={() => setSelectedProduct(item)}
              />
              <h3 className="font-semibold text-lg tracking-wide mb-2 uppercase">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{item.desc}</p>
              <p className="text-yellow-500 font-bold text-lg mb-3">
                {item.price}
              </p>
              <button
                onClick={() => setSelectedProduct(item)}
                className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-sm hover:bg-yellow-500 hover:text-black transition"
              >
                View Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ===== PRODUCT DETAIL PAGE =====
  const ProductDetailPage = ({ product }) => (
    <div className="bg-[#0f0f0f] text-white">
      {/* Hero */}
      <HeroSection
        title="PRODUCT DETAIL"
        subtitle="Product Detail"
        bg="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
      />

      {/* Product Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-yellow-500 text-xl font-medium mb-6">
            {product.price}
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">{product.desc}</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            “and”.
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Size</label>
            <select
              className="bg-transparent border border-gray-600 rounded px-3 py-2"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="border border-gray-600 px-3 py-1"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border border-gray-600 px-3 py-1"
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded">
              Add to Cart
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="border border-gray-600 hover:bg-gray-700 px-8 py-3 rounded"
            >
              Back to Shop
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 text-center bg-[#0f0f0f]">
        <h2 className="text-4xl font-semibold mb-4">
          <span className="text-yellow-600 font-script italic">Discover </span>
          Related Products
        </h2>
        <p className="text-gray-400 mb-10">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="rounded-md mb-4 h-56 w-full object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                A small river named Duden flows by their place and supplies
              </p>
              <p className="text-yellow-500 font-medium mb-3">
                {product.price}
              </p>
              <button className="border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-600 px-4 py-2 rounded transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // ===== FOOTER =====
  const Footer = () => (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-20 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">ABOUT US</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Recent Blog */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">RECENT BLOG</h3>
          <div className="flex mb-4">
            <img
              src="https://images.unsplash.com/photo-1600891963933-c26b0e1c1c2c?auto=format&fit=crop&w=100&q=80"
              alt="blog"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-sm text-gray-300 font-medium">
                Even the all-powerful Pointing has no control about
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-2 mt-1">
                <Calendar size={12} />
                <span>Sept 15, 2018</span>
                <User size={12} />
                <span>Admin</span>
                <MessageSquare size={12} />
                <span>19</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Cooked</li>
            <li>Deliver</li>
            <li>Quality Foods</li>
            <li>Mixed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            HAVE A QUESTIONS?
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="mt-1 text-gray-400" />
              <span>Tinkune-32, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-gray-400" />
              <span>+977-9845734489</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-gray-400" />
              <span>coffeeblend@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        Copyright ©2025 All rights reserved |
      </div>
    </footer>
  );

  // ===== MAIN RETURN =====
  return (
    <div className="bg-[#0c0b09] text-white min-h-screen flex flex-col">
      {!selectedProduct ? <ShopPage /> : <ProductDetailPage product={selectedProduct} />}
      <Footer />
    </div>
  );
}
