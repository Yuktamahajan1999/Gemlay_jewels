import React from "react";
import { Link } from "react-router-dom";

const collections = [
  { image: "/images/pendants.png", path: "/discover-all/pendants" },
  { image: "/images/heartring.png", path: "/discover-all/ring" },
  { image: "/images/earring.png", path: "/discover-all/earrings" },
  { image: "/images/watch.png", path: "/discover-all/watches" },
  { image: "/images/ring-set.png", path: "/discover-all/rings" },
  { image: "/images/bracelets.png", path: "/discover-all/bracelets-bangles" },
];

export default function CollectionsSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      {/* COLLECTIONS SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="h-[2px] w-12 bg-[#007A64]"></span>
          <p className="text-[#007A64] text-sm font-semibold tracking-[0.2em]">
            COLLECTIONS
          </p>
          <span className="h-[2px] w-12 bg-[#007A64]"></span>
        </div>

        <h2 className="text-3xl sm:text-4xl text-gray-400 tracking-wide mt-2">
          DISCOVER YOUR WORLD OF JEWELLERY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {collections.map((collection, index) => (
          <Link key={index} to={collection.path}>
            <div className="h-[220px] bg-[#FFF9F2] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={collection.image}
                alt={`Collection ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* DISCOVER ALL BUTTON */}
      <div className="flex justify-center mt-12">
        <Link
          to="/discover-all"
          className="group relative px-12 py-4 bg-transparent border-2 border-[#007A64] text-[#007A64] rounded-full font-semibold tracking-wider hover:text-white transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#004034] to-[#007A64] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          
          <span className="relative z-10 flex items-center gap-3">
            DISCOVER ALL
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              ➤
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
