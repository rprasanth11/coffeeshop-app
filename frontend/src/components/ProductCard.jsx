import React from "react";

export default function ProductCard({ name, image, price }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
      {/* Coffee Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Coffee Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          Freshly brewed coffee to brighten your day ☕
        </p>

        {/* Price + Button */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-amber-700">
            ${price}
          </span>
          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
