import React, { useState } from "react";
import { ClipboardList, Truck, Coffee } from "lucide-react";

// Hero Section
function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503481766315-7a586b20f66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-white px-4">
        <p className="text-lg italic text-yellow-400 mb-2">Welcome</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          AMAZING TASTE & BEAUTIFUL PLACE
        </h1>
        <p className="max-w-2xl mb-6">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="flex gap-6">
          <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg text-lg font-semibold transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}

// Our Story Section
function OurStory() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white"
    >
      <div
        className="w-full md:w-1/2 h-[400px] md:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/coffeeblend/images/about.jpg')",
        }}
      ></div>
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-black/70">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR STORY</h2>
        <p className="text-gray-300 leading-relaxed">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her...
        </p>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <ClipboardList className="w-12 h-12 mx-auto mb-4" />,
      title: "EASY TO ORDER",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
    {
      icon: <Truck className="w-12 h-12 mx-auto mb-4" />,
      title: "FASTEST DELIVERY",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
    {
      icon: <Coffee className="w-12 h-12 mx-auto mb-4" />,
      title: "QUALITY COFFEE",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
  ];

  return (
    <section id="features" className="bg-amber-600 py-20 text-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div key={index} className="text-black">
            <div className="border p-6 inline-block">{item.icon}</div>
            <h3 className="font-bold text-xl mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Our Menu Section
function OurMenu() {
  return (
    <section
      id="menu"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white"
    >
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR MENU</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia...
        </p>
        <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-lg transition w-fit mx-auto md:mx-0">
          View Full Menu
        </button>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-6">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Latte"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Espresso"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
          alt="Beans"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Cappuccino"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  const stats = [
    { number: "100", label: "Coffee Branches" },
    { number: "85", label: "Number of Awards" },
    { number: "10,567", label: "Happy Customer" },
    { number: "900", label: "Staff" },
  ];

  return (
    <section
      id="stats"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-yellow-500">
              {item.number}
            </h3>
            <p className="text-gray-300 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Best Sellers Section
function BestSellers() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      name: "COFFEE CAPUCCINO",
      desc: "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      name: "COFFEE CAPUCCINO",
      desc: "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
      name: "COFFEE CAPUCCINO",
      desc: "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      name: "COFFEE CAPUCCINO",
      desc: "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
  ];

  return (
    <section id="sellers" className="bg-black text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">BEST COFFEE SELLERS</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          Far far away, behind the word mountains...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-56" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <p className="text-yellow-500 font-bold mt-3">{item.price}</p>
                <button className="mt-4 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
  ];

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="container mx-auto px-6 text-center text-white">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-10">OUR COMMUNITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-72 object-cover rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Products Section
function Products() {
  const categories = {
    "Main Dish": [
      {
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        name: "Grilled Beef",
        desc: "Far far away, behind the word mountains...",
        price: "$2.90",
      },
      {
        img: "https://images.unsplash.com/photo-1604908177522-04011817f0eb",
        name: "Lamb Ribs",
        desc: "Separated they live in Bookmarksgrove...",
        price: "$2.90",
      },
      {
        img: "https://images.unsplash.com/photo-1617196038435-5c2813a1cfb2",
        name: "Steak",
        desc: "A large language ocean...",
        price: "$2.90",
      },
    ],
    Drinks: [
      {
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        name: "Espresso",
        desc: "Smooth, rich espresso shot.",
        price: "$1.90",
      },
      {
        img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
        name: "Cappuccino",
        desc: "Classic cappuccino with milk foam.",
        price: "$3.20",
      },
    ],
    Desserts: [
      {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        name: "Chocolate Cake",
        desc: "Rich chocolate layered cake.",
        price: "$4.50",
      },
      {
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
        name: "Cheesecake",
        desc: "Delicious cheesecake with base.",
        price: "$4.90",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Main Dish");

  return (
    <section id="products" className="bg-black text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR PRODUCTS</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          Far far away, behind the word mountains...
        </p>
        <div className="flex justify-center gap-6 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 ${
                activeTab === cat
                  ? "bg-yellow-600 text-black font-bold"
                  : "text-gray-300 hover:text-yellow-500"
              } rounded transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-56" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <p className="text-yellow-500 font-bold mt-3">{item.price}</p>
                <button className="mt-4 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section (9th page)
function Testimonials() {
  const feedbacks = [
    {
      text: "Even the all-powerful Pointing has no control about the blind texts...",
      name: "Louise Kelly",
      role: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      text: "One day however a small line of blind text decided to leave...",
      name: "Louise Kelly",
      role: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Separated they live in Bookmarksgrove right at the coast...",
      name: "Louise Kelly",
      role: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "A large language ocean. A small river named Duden flows by...",
      name: "Louise Kelly",
      role: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498804103079-a6351b050096')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Testimony</h3>
        <h2 className="text-4xl font-bold mb-6">CUSTOMERS SAYS</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="bg-yellow-900/70 text-white p-6 rounded-lg text-left"
            >
              <p className="italic">“{f.text}”</p>
              <div className="flex items-center mt-4">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{f.name}</h4>
                  <p className="text-sm text-gray-300">{f.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App
export default function App() {
  return (
    <>
      <Hero />
      <OurStory />
      <Features />
      <OurMenu />
      <Stats />
      <BestSellers />
      <Gallery />
      <Products />
      <Testimonials /> {/* ✅ 9th Section */}
    </>
  );
}
