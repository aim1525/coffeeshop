import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        

        {/* HERO TEXT */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">CONTACT US</h1>
          <p className="text-gray-300 text-lg">
            <a href="/" className="hover:text-yellow-400 transition">HOME</a>{" "}
            <span className="mx-2">/</span>
            <span className="text-yellow-400">CONTACT</span>
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our menu, services,
              or want to collaborate — feel free to reach out.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">📍 Address</h3>
                <p className="text-gray-600">
                  Coffee Blend Cafe, 2nd Floor<br />
                  Tinkune, Kathmandu Nepal
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">📞 Phone</h3>
                <p className="text-gray-600">+977-9834674567</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">📧 Email</h3>
                <p className="text-gray-600">coffeeblend@gmail.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="h-[400px]">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.39476278013854!2d85.34553401822787!3d27.686161223895954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199e518fd3f9%3A0x71df02e45237f9b2!2sP.E.%20Foundation!5e1!3m2!1sen!2snp!4v1762669438521!5m2!1sen!2snp"
          allowFullScreen
        ></iframe>
      </section>

      

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>
          © {new Date().getFullYear()} <span className="text-white font-semibold">Coffee Blend</span>.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
