import React, { useState } from "react";
import { FiBox, FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

const categories = [
    { name: "NEW ARRIVAL", path: "/discover-all" },
    { name: "RINGS", path: "/discover-all/rings" },
    { name: "EARRINGS", path: "/discover-all/earrings" },
    { name: "PENDANTS", path: "/discover-all/pendants" },
    { name: "BRACELETS & BANGLES", path: "/discover-all/bracelets-bangles" },
    { name: "SOLITAIRES", path: "/discover-all/solitaires" },
    { name: "GOLD COINS", path: "/discover-all/gold-coins" },
    { name: "ALL JEWELLERY", path: "/discover-all" },
];

export default function GemlayHeader() {
    const [userName] = useState(() => localStorage.getItem("userName") || "");

    return (
        <header className="w-full bg-white shadow-md">
            <Header />

            {/* Gemlay Header Top section */}
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-2 py-3">
                <div className="flex items-center gap-10">
                    <img src="/images/logo.png" alt="Logo" className="w-[150px] ml-[-10px]" />
                </div>

                <div className="w-[420px] mr-auto ml-10">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full h-[42px] rounded-full border border-gray-300 px-4 outline-none"
                    />
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center text-[12px]">
                        <FiBox className="text-[26px] text-gray-700" />
                        <span>GSP</span>
                    </div>

                    <div className="flex flex-col items-center text-[12px]">
                        <BiSolidOffer className="text-[26px] text-gray-700" />
                        <span>OFFERS</span>
                    </div>

                    <div className="flex flex-col items-center text-[12px]">
                        <FiHeart className="text-[26px] text-gray-700" />
                        <span>WISHLIST</span>
                    </div>

                    <div className="flex flex-col items-center text-[12px]">
                        <FiShoppingCart className="text-[26px] text-gray-700" />
                        <span>CART</span>
                    </div>

                    <div className="flex flex-col items-center text-[12px]">
                        <MdOutlineQrCodeScanner className="text-[26px] text-gray-700" />
                        <span>VERIFY REPORT</span>
                    </div>

                    <div className="flex flex-col items-center text-[12px] pb-1">
                        <div className="flex items-center gap-1">
                            <FaRegUserCircle className="text-[26px] text-gray-700" />
                            <span className="text-[14px] text-purple-500 font-medium">
                                {userName ? `Hi, ${userName}` : "Hi, User"}
                            </span>
                        </div>
                        <div className="w-full h-[2px] bg-teal-700 mt-1 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Category Navigation */}
            <div className="w-full border-t border-teal-700">
                <div className="max-w-[1440px] mx-auto flex justify-between px-6 py-3 text-[13px] font-medium">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            className="cursor-pointer hover:text-[#008E7A]"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
