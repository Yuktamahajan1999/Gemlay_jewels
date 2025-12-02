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

            {/* Top section */}
            <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-3 md:px-6 py-3 gap-4">
                {/* Logo */}
                <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-[120px] md:w-[150px]"
                    />
                </div>

                {/* Search bar */}
                <div className="w-full md:w-[420px] md:mx-10 mt-2 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full h-[38px] md:h-[42px] rounded-full border border-gray-300 px-4 outline-none text-sm md:text-base"
                    />
                </div>

                {/* Icons */}
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8 mt-3 md:mt-0">
                    {/* GSP */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[60px]">
                        <FiBox className="text-[22px] md:text-[26px] text-gray-700" />
                        <span className="mt-1">GSP</span>
                    </div>

                    {/* Offers */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[60px]">
                        <BiSolidOffer className="text-[22px] md:text-[26px] text-gray-700" />
                        <span className="mt-1">OFFERS</span>
                    </div>

                    {/* Wishlist */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[60px]">
                        <FiHeart className="text-[22px] md:text-[26px] text-gray-700" />
                        <span className="mt-1">WISHLIST</span>
                    </div>

                    {/* Cart */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[60px]">
                        <FiShoppingCart className="text-[22px] md:text-[26px] text-gray-700" />
                        <span className="mt-1">CART</span>
                    </div>

                    {/* Verify */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[60px]">
                        <MdOutlineQrCodeScanner className="text-[22px] md:text-[26px] text-gray-700" />
                        <span className="mt-1">VERIFY</span>
                    </div>

                    {/* User */}
                    <div className="flex flex-col items-center text-[11px] md:text-[12px] min-w-[80px] pb-1">
                        <div className="flex items-center gap-1">
                            <FaRegUserCircle className="text-[22px] md:text-[26px] text-gray-700" />
                            <span className="text-[12px] md:text-[14px] text-purple-500 font-medium">
                                {userName ? `Hi, ${userName}` : "Hi, User"}
                            </span>
                        </div>
                        <div className="w-full h-[2px] bg-teal-700 mt-1 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Category Navigation */}
            <div className="w-full border-t border-teal-700">
                <div className="max-w-[1440px] mx-auto flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible px-3 md:px-6 py-3 text-[12px] md:text-[13px] font-medium scrollbar-hide">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            className="cursor-pointer hover:text-[#008E7A] whitespace-nowrap"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}