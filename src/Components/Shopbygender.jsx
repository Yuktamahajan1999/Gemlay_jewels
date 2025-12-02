import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Women", image: "/images/women.png" },
  { label: "Men", image: "/images/men.png" },
  { label: "Kids", image: "/images/kids.png" },
  { label: "Unisex", image: "/images/unisex.png" },
];

export default function ShopByGender() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      {/* Shop By Gender Section  */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl text-[#00392E] tracking-wide mb-2">
          SHOP BY GENDER
        </h2>
        <p className="text-[#007A64] text-base sm:text-lg tracking-wide">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </div>

      {/* Category Section */}
      <div className="flex gap-6 overflow-x-auto lg:hidden px-2 scrollbar-hide">
        {categories.map((item) => (
          <Link
            key={item.label}
            to={`/category/${item.label.toLowerCase()}`}
            className="min-w-[250px] relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#F5F5F5]/40"></div>
          </Link>
        ))}
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-8">
        {categories.map((item) => (
          <Link
            key={item.label}
            to={`/category/${item.label.toLowerCase()}`}
            className="relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#F5F5F5]/40"></div>
          </Link>
        ))}
      </div>

      {/* Discover All Button */}
      <div className="flex justify-center mt-14">
        <Link
          to="/discover-all"
          className="px-10 py-3 border border-[#007A64] text-[#007A64] rounded-full font-semibold tracking-wide hover:bg-[#007A64] hover:text-white transition shadow-sm"
        >
          DISCOVER ALL
        </Link>
      </div>
    </section>
  );
}