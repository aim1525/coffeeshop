import React from "react";

export default function ServicesHero() {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold tracking-wide">SERVICES</h1>
        <p className="mt-3 text-lg">
          <span className="text-gray-300">HOME</span> <span> / SERVICES</span>
        </p>
      </div>
    </div>
  );
}
