import React from "react";
import { kidsJewellery } from "../Data";

export default function KidsSection() {
  return (
    <section className="w-full py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl text-[#00392E] tracking-wide mb-2">
          KIDS JEWELLERY
        </h2>
        <p className="text-[#007A64] text-base sm:text-lg tracking-wide">
          Playful, colorful, and safe designs for little ones
        </p>
      </div>

      {/* Product Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {kidsJewellery.map((item, index) => (
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