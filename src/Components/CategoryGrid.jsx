import React from "react";
import { Link } from "react-router-dom";

const topCategories = [
  { label: "Rings", image: "/images/ring.png", path: "/discover-all/rings" },
  { label: "Earrings", image: "/images/earrings.png", path: "/discover-all/earrings" },
];

const bottomCategories = [
  { label: "Bracelet", image: "/images/bracelet.png", path: "/discover-all/bracelets-bangles" },
  { label: "Pendant", image: "/images/pendant.png", path: "/discover-all/pendants" },
  { label: "Bangles", image: "/images/bangles.png", path: "/discover-all/bracelets-bangles" },
  { label: "Mangalsutra", image: "/images/mangalsutra.png", path: "/discover-all/mangalsutra" },
];

export default function CategoryGridSection() {
  return (
    <section className="w-full py-20 px-6 bg-[#F9FAFB]">

      {/* Category Section*/}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center mb-4">
          <span className="block w-12 h-[2px] bg-[#007A64] mr-4"></span>
          <h2 className="text-3xl sm:text-4xl text-[#00392E] tracking-wide">
            CATEGORY
          </h2>
          <span className="block w-12 h-[2px] bg-[#007A64] ml-4"></span>
        </div>
        <p className="text-[#007A64] text-base sm:text-lg tracking-wide">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </div>

      {/* Top Categories */}
      <div className="flex gap-6 overflow-x-auto sm:hidden px-2 scrollbar-hide mb-10">
        {topCategories.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="min-w-[250px] relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-8 mb-10">
        {topCategories.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>

      {/* Bottom Categories */}
      <div className="flex gap-6 overflow-x-auto sm:hidden px-2 scrollbar-hide mb-14">
        {bottomCategories.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="min-w-[180px] relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
        {bottomCategories.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="relative group overflow-hidden rounded-xl shadow-md border border-[#EFEFEF]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>

      {/* Discover All Button */}
      <div className="flex justify-center">
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