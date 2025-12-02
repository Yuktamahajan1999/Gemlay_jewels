import React from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FiLink2 } from "react-icons/fi";

const bestSellers = [
    {
        label: "TRENDING",
        labelColor: "#00AEEF",
        name: "Yeremely Wings Diamond Ring",
        newPrice: "₹22,323",
        oldPrice: "₹22,323",
        image: "/images/rings.png",
    },
    {
        label: "BEST SELLER",
        labelColor: "#FF7B7B",
        name: "Yeremely Wings Diamond Ring",
        newPrice: "₹22,323",
        oldPrice: "₹22,323",
        image: "/images/women-ring.png",
    },
    {
        label: "NEW",
        labelColor: "#6BB6FF",
        name: "Yeremely Wings Diamond Ring",
        newPrice: "₹22,323",
        oldPrice: "₹22,323",
        image: "/images/latestring.png",
    },
    {
        label: "TRENDING",
        labelColor: "#00AEEF",
        name: "Yeremely Wings Diamond Ring",
        newPrice: "₹22,323",
        oldPrice: "₹22,323",
        image: "/images/men-ring.png",
    },
    {
        label: "TRENDING",
        labelColor: "#00AEEF",
        name: "Yeremely Wings Diamond Ring",
        newPrice: "₹22,323",
        oldPrice: "₹22,323",
        image: "/images/girl-ring.png",
    },
];

export default function TrendingSection() {
    return (
        <section className="w-full py-20 px-6 bg-white">
            {/* Trending section heading */}
            <div className="max-w-7xl mx-auto text-center mb-14">
                <div className="flex items-center justify-center mb-2">
                    <span className="block w-12 h-[2px] bg-[#007A64] mr-4"></span>
                    <p className="text-[#007A64] text-sm tracking-widest font-medium">
                        TRENDING SECTION
                    </p>
                    <span className="block w-12 h-[2px] bg-[#007A64] ml-4"></span>
                </div>

                <h2 className="text-2xl sm:text-xl text-gray-400 tracking-wide mt-2">
                    DISCOVER YOUR WORLD OF JEWELLERY
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {bestSellers.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-[20px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
                    >
                        <div className="bg-[#FFF9F2] pt-6 pb-4 flex justify-center items-start relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-40 object-contain"
                            />

                            <span
                                className="absolute top-3 left-3 px-5 py-[6px] text-[11px] font-semibold rounded-full tracking-wide flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(90deg, #A8C8FF, #E3E3E3)",
                                    color: "#003049",
                                }}
                            >
                                {item.label}
                            </span>

                            <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow text-gray-500 hover:text-red-500">
                                <HiOutlineHeart className="text-lg" />
                            </button>
                        </div>
                        <div className="flex-1 bg-white px-4 pt-4 pb-5 relative">
                            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 items-center">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[22px] font-semibold text-[#222]">
                                        {item.newPrice}
                                    </span>
                                    <span className="text-sm text-gray-400 line-through">
                                        {item.oldPrice}
                                    </span>
                                </div>
                                <span className="w-8 h-8 rounded-full bg-gradient-to-b from-[#FFD36A] to-[#FFB32A] border border-white shadow" />

                                <p className="text-sm text-[#444] truncate max-w-[180px]">
                                    {item.name}
                                </p>
                                <span className="w-8 h-8 rounded-full bg-[#EDEDED] border border-[#C7C7C7]" />

                                <p className="text-[13px] font-semibold text-[#008A4A]">
                                    10 % on Making Charges
                                </p>
                                <span className="w-8 h-8 rounded-full bg-gradient-to-b from-[#FF7B32] to-[#FF4B1F] border border-white shadow" />
                            </div>
                        </div>

                        <div className="flex h-14 mt-auto">
                            <Link
                                to="/similar"
                                className="flex-1 flex items-center justify-center gap-2 text-[15px] font-medium text-[#004034] bg-white border-t border-[#F3F3F3]"
                            >
                                <FiLink2 className="text-[#FF8A00] text-[18px]" />
                                <span>View Similar</span>
                            </Link>

                            <button className="flex-1 bg-gradient-to-r from-[#004034] to-[#008A4A] text-white text-[15px] font-semibold flex items-center justify-center rounded-tl-[40px]">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link
                    to="/discover-all"
                    className="px-12 py-3 bg-gradient-to-r from-[#004034] to-[#008A4A] text-white rounded-full font-semibold tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    DISCOVER ALL
                </Link>
            </div>
        </section >

    );
}