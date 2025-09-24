import React, { useState } from "react";

export default function MenuPage() {
  const MenuItem = ({ img, name, price }) => (
    <div className="flex items-center justify-between border-b border-gray-700 py-4">
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">
            A small river named Duden flows by their place and supplies.
          </p>
        </div>
      </div>
      <p className="text-yellow-500 font-bold">{price}</p>
    </div>
  );

  // --- PRODUCT GRID DATA ---
  const [activeTab, setActiveTab] = useState("main");

  const products = {
    main: [
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-2.jpg",
      },
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-3.jpg",
      },
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-4.jpg",
      },
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-5.jpg",
      },
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-6.jpg",
      },
      {
        name: "Grilled Beef",
        price: "$2.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-7.jpg",
      },
    ],
    drinks: [
      {
        name: "Cocktail",
        price: "$3.50",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/drink-1.jpg",
      },
      {
        name: "Wine",
        price: "$4.20",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/drink-2.jpg",
      },
      {
        name: "Beer",
        price: "$2.10",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/drink-3.jpg",
      },
    ],
    desserts: [
      {
        name: "Chocolate Cake",
        price: "$3.90",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dessert-1.jpg",
      },
      {
        name: "Strawberry Tart",
        price: "$4.10",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dessert-2.jpg",
      },
      {
        name: "Ice Cream",
        price: "$2.50",
        img: "https://preview.colorlib.com/theme/coffeeblend/images/dessert-3.jpg",
      },
    ],
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold">OUR MENU</h1>
          <p className="mt-3">
            <span className="text-gray-300">HOME</span> <span> / MENU</span>
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Contact Info */}
        <div className="bg-black text-white flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-yellow-500 text-xl">📞</p>
            <h4 className="font-bold">000 (123) 456 7890</h4>
            <p className="text-gray-400 text-sm mt-2">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
          <div>
            <p className="text-yellow-500 text-xl">📍</p>
            <h4 className="font-bold">198 West 21th Street</h4>
            <p className="text-gray-400 text-sm mt-2">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div>
            <p className="text-yellow-500 text-xl">⏰</p>
            <h4 className="font-bold">Open Monday-Friday</h4>
            <p className="text-gray-400 text-sm mt-2">8:00am - 9:00pm</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-[#c49b63] flex-1 p-8">
          <h2 className="text-lg font-bold mb-4">BOOK A TABLE</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 border-b bg-transparent outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 border-b bg-transparent outline-none"
            />
            <input
              type="date"
              className="p-2 border-b bg-transparent outline-none"
            />
            <input
              type="time"
              className="p-2 border-b bg-transparent outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 border-b bg-transparent outline-none"
            />
            <textarea
              placeholder="Message"
              className="p-2 border-b bg-transparent outline-none md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-2 mt-2 md:col-span-2"
            >
              Appointment
            </button>
          </form>
        </div>
      </div>

      {/* Menu Section (Page 2) */}
      <div className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Starter */}
          <div>
            <h2 className="text-2xl font-bold mb-6">STARTER</h2>
            <MenuItem
              name="Cornish - Mackerel"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-3.jpg"
            />
            <MenuItem
              name="Roasted Steak"
              price="$29.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-2.jpg"
            />
            <MenuItem
              name="Seasonal Soup"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-4.jpg"
            />
            <MenuItem
              name="Chicken Curry"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-5.jpg"
            />
          </div>

          {/* Main Dish */}
          <div>
            <h2 className="text-2xl font-bold mb-6">MAIN DISH</h2>
            <MenuItem
              name="Sea Trout"
              price="$49.91"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-6.jpg"
            />
            <MenuItem
              name="Roasted Beef"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-7.jpg"
            />
            <MenuItem
              name="Butter Fried Chicken"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-8.jpg"
            />
            <MenuItem
              name="Chicken Filet"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dish-9.jpg"
            />
          </div>

          {/* Desserts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DESSERTS</h2>
            <MenuItem
              name="Cornish - Mackerel"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dessert-1.jpg"
            />
            <MenuItem
              name="Roasted Steak"
              price="$29.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dessert-2.jpg"
            />
            <MenuItem
              name="Seasonal Soup"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dessert-3.jpg"
            />
            <MenuItem
              name="Chicken Curry"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/dessert-4.jpg"
            />
          </div>

          {/* Drinks */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DRINKS</h2>
            <MenuItem
              name="Sea Trout"
              price="$49.91"
              img="https://preview.colorlib.com/theme/coffeeblend/images/drink-1.jpg"
            />
            <MenuItem
              name="Roasted Beef"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/drink-2.jpg"
            />
            <MenuItem
              name="Butter Fried Chicken"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/drink-3.jpg"
            />
            <MenuItem
              name="Chicken Filet"
              price="$20.00"
              img="https://preview.colorlib.com/theme/coffeeblend/images/drink-4.jpg"
            />
          </div>
        </div>
      </div>

      {/* Product Grid Section (Page 3) */}
      <div className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-yellow-500 italic">Discover</h2>
          <h1 className="text-4xl font-bold">OUR PRODUCTS</h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2 ${
              activeTab === "main" ? "bg-yellow-600" : "bg-transparent"
            }`}
          >
            Main Dish
          </button>
          <button
            onClick={() => setActiveTab("drinks")}
            className={`px-6 py-2 ${
              activeTab === "drinks" ? "bg-yellow-600" : "bg-transparent"
            }`}
          >
            Drinks
          </button>
          <button
            onClick={() => setActiveTab("desserts")}
            className={`px-6 py-2 ${
              activeTab === "desserts" ? "bg-yellow-600" : "bg-transparent"
            }`}
          >
            Desserts
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-4 shadow-lg text-center flex flex-col"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover mb-4"
              />
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-400 text-sm my-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <p className="text-yellow-500 font-bold">{item.price}</p>
              <button className="mt-4 bg-yellow-600 px-4 py-2 text-black font-semibold">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section (Page 4) */}
      <footer className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-400 mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
              >
                🐦
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
              >
                📘
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
              >
                📸
              </a>
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="font-bold mb-4">RECENT BLOG</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://preview.colorlib.com/theme/coffeeblend/images/image_1.jpg"
                alt="Blog"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="text-sm">
                  Even the all-powerful Pointing has no control about
                </h4>
                <p className="text-gray-500 text-xs">Sept 15, 2018 • Admin</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://preview.colorlib.com/theme/coffeeblend/images/image_2.jpg"
                alt="Blog"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="text-sm">
                  Even the all-powerful Pointing has no control about
                </h4>
                <p className="text-gray-500 text-xs">Sept 15, 2018 • Admin</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">HAVE A QUESTIONS?</h3>
            <p className="text-gray-400">
              📍 203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className="text-gray-400 mt-2">📞 +2 392 3929 210</p>
            <p className="text-gray-400 mt-2">✉️ info@yourdomain.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 mt-12">
          Copyright ©2025 All rights reserved | This template is made with ❤️ by
          Colorlib
        </div>
      </footer>
    </div>
  );
}
