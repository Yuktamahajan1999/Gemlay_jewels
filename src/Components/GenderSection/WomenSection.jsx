import React from "react";
import { womenJewellery } from "../Data";


export default function WomenSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl text-[#00392E] tracking-wide mb-2">
          WOMEN JEWELLERY
        </h2>
        <p className="text-[#007A64] text-base sm:text-lg tracking-wide">
          Elegant, timeless, and premium designs for women
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {womenJewellery.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md border border-[#EFEFEF] overflow-hidden bg-white hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-[#00392E] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.price}</p>
              <button className="w-full px-4 py-2 bg-[#007A64] text-white rounded-lg hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}