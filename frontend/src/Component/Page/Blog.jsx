import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// You can replace these with your own images in /src/assets folder
const img1 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
const img2 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
const img3 = "https://images.unsplash.com/photo-1541167760496-1628856ab772";
const img4 = "https://images.unsplash.com/photo-1498804103079-a6351b050096";
const img5 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
const img6 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
const heroImg =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80";

function App() {
  const blogs = [
    { id: 1, img: img1, title: "Coffee Testing Day" },
    { id: 2, img: img2, title: "Coffee Testing Day" },
    { id: 3, img: img3, title: "Coffee Testing Day" },
    { id: 4, img: img4, title: "Coffee Testing Day" },
    { id: 5, img: img5, title: "Coffee Testing Day" },
    { id: 6, img: img6, title: "Coffee Testing Day" },
  ];

  return (
    <div className="bg-[#0d0b0b] text-white font-sans">

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10 mt-16">
          <h1 className="text-5xl font-semibold tracking-wider mb-4">BLOG</h1>
          <p className="uppercase text-sm">
            Home <span className="text-yellow-400">/ Blog</span>
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#141010] text-white py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div key={blog.id} className="space-y-3">
              <img
                src={blog.img}
                alt={blog.title}
                className="rounded-lg hover:opacity-80 transition-all"
              />
              <div className="text-gray-400 text-xs flex items-center space-x-2">
                <p>Sept 28, 2018</p>
                <p>Admin</p>
                <MessageCircle size={14} />
                <p>3</p>
              </div>
              <h3 className="font-semibold text-white">{blog.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#1a1414] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
            alt="coffee beans"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h3 className="text-yellow-400 text-sm uppercase mb-2 tracking-wider">
            About Us
          </h3>
          <h2 className="text-4xl font-semibold mb-6">Discover Our Story</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-semibold text-white mb-4">ABOUT US</h3>
            <p className="text-sm mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4">
              <Twitter className="hover:text-yellow-400 cursor-pointer" />
              <Facebook className="hover:text-yellow-400 cursor-pointer" />
              <Instagram className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="font-semibold text-white mb-4">RECENT BLOG</h3>
            {[img1, img2].map((img, idx) => (
              <div key={idx} className="flex space-x-4 mb-4">
                <img
                  src={img}
                  alt=""
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    Even the all-powerful Pointing has no control about
                  </p>
                  <p className="text-xs text-gray-400">
                    Sept 15, 2018 | Admin | 19
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">HAVE A QUESTIONS?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>
                  Tinkune-32, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+977-9834763378</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>coffeeblend@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-10 text-gray-500">
          Copyright ©2025 All rights reserved | 
        </p>
      </footer>
    </div>
  );
}

export default App;
