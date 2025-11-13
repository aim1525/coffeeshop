import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams(); // ✅ Get product id from URL
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");

  // Example product list (in real app, this could come from props or API)
  const products = [
    {
      id: 1,
      title: "Coffee Capuccino",
      price: "$5.90",
      desc: "A smooth and creamy coffee with rich foam and deep aroma.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Creamy Latte Coffee",
      price: "$4.90",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Mocha Delight",
      price: "$6.50",
      desc: "Rich espresso combined with chocolate syrup and steamed milk.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const relatedProducts = products.filter((p) => p.id !== Number(id));
  const product = products.find((p) => p.id === Number(id));

  // ✅ Handle missing product
  if (!product) {
    return (
      <div className="text-center text-white py-32 bg-[#0f0f0f] min-h-screen">
        <h1 className="text-3xl font-semibold mb-4">Product not found</h1>
        <Link to="/" className="text-yellow-500 underline">
          Go back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-widest">
            PRODUCT DETAIL
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
            Home / Product Detail
          </p>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.img}
            alt={product.title}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
          <p className="text-yellow-500 text-xl font-medium mb-6">
            {product.price}
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">{product.desc}</p>

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
            <Link
              to="/"
              className="border border-gray-600 hover:bg-gray-700 px-8 py-3 rounded"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 text-center bg-[#0f0f0f]">
        <h2 className="text-4xl font-semibold mb-4">
          <span className="text-yellow-600 font-script italic">Discover </span>
          Related Products
        </h2>
        <p className="text-gray-400 mb-10">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {relatedProducts.map((rp) => (
            <div
              key={rp.id}
              className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={rp.img}
                alt={rp.title}
                className="rounded-md mb-4 h-56 w-full object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{rp.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                A small river named Duden flows by their place and supplies
              </p>
              <p className="text-yellow-500 font-medium mb-3">{rp.price}</p>
              <Link
                to={`/product/${rp.id}`}
                className="border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-600 px-4 py-2 rounded transition inline-block"
              >
                View Detail
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
