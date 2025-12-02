import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  womenJewellery,
  menJewellery,
  kidsJewellery,
  unisexJewellery,
  solitaireJewellery,
  goldCoins,
  necklaceJewellery
} from "./Data";

const allJewellery = [
  ...womenJewellery,
  ...menJewellery,
  ...kidsJewellery,
  ...unisexJewellery,
  ...solitaireJewellery,
  ...goldCoins,
  ...necklaceJewellery
];

export default function AllProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts =
    category && category !== "all-jewellery"
      ? allJewellery.filter((item) => item.category === category)
      : allJewellery;

  return (
    <section className="w-full py-20 px-6 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl text-[#00392E] tracking-wide mb-2">
          {category ? category.replace("-", " ").toUpperCase() : "DISCOVER ALL JEWELLERY"}
        </h2>
        <p className="text-[#007A64] text-base sm:text-lg tracking-wide">
          Explore our complete collection across all categories
        </p>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-[#007A64] text-[#007A64] rounded-full font-semibold tracking-wide hover:bg-[#007A64] hover:text-white transition shadow-sm"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md border border-[#EFEFEF] overflow-hidden bg-white hover:shadow-lg transition"
          >
            <div className="p-4 bg-white mx-4 mt-4 mb-2 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-48 object-contain"
              />
            </div>

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