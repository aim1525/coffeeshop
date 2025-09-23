import React from "react";

export default function MenuPage() {
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
    </div>
  );
}