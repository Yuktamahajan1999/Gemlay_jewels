import React from "react";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const categories = [
    { name: "Rings", img: "/images/ring.webp", path: "/discover-all/rings" },
    { name: "Earrings", img: "/images/rose-earring.jpg", path: "/discover-all/earrings" },
    { name: "Tanmaniya", img: "/images/tanmaniya.webp", path: "/discover-all/tanmaniya" },
    { name: "Bangles", img: "/images/bangles.webp", path: "/discover-all/bracelets-bangles" },
    { name: "Bracelets", img: "/images/bracelet.webp", path: "/discover-all/bracelets-bangles" },
    { name: "Pendants", img: "/images/diamond-pendant.webp", path: "/discover-all/pendants" },
    { name: "Rings", img: "/images/menring.jpeg", path: "/discover-all/rings" },
];

export default function HomeHighlights() {
    return (
        <div className="w-full bg-white pb-20 relative">

            {/* SPIN TO WIN  */}
            <button className="absolute left-6 top-8 z-30 flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border-[3px] border-teal-700 bg-white shadow-lg group-hover:scale-105 group-hover:shadow-xl transition overflow-hidden">
                    <img
                        src="/images/spinthewheel.webp"
                        alt="spin"
                        className="w-full h-full object-cover"
                    />
                </div>
            </button>

            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] bg-white">

                    {/* CATEGORY CAROUSEL */}
                    <div className="relative w-full mt-10 px-16">
                        <IoArrowBackCircleSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700 text-4xl cursor-pointer hover:scale-110 transition" />

                        <div className="flex items-center justify-center gap-10 overflow-x-auto scrollbar-hide py-10">
                            {categories.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className="text-center min-w-[120px]"
                                >
                                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[3px] border-teal-800 flex items-center justify-center shadow-md hover:scale-105 transition bg-white mx-auto">
                                        <img
                                            src={item.img}
                                            className="h-14 md:h-16 object-contain"
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm md:text-base font-medium text-slate-700">
                                        {item.name}
                                    </p>
                                    <div className="w-8 h-[2px] bg-teal-700 mx-auto mt-1" />
                                </Link>
                            ))}
                        </div>

                        <IoArrowForwardCircleSharp className="absolute right-16 top-1/2 -translate-y-1/2 text-teal-700 text-4xl cursor-pointer hover:scale-110 transition" />
                    </div>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-[#007A64] to-[#00A38A] flex items-center justify-center shadow-md hover:scale-110 transition">
                        <MdMessage className="text-white text-2xl" />
                    </button>


                    {/* EXPRESS DELIVERY + SPECIAL DISCOUNT */}
                    <div className="w-full flex justify-center mt-6 px-4">
                        <div
                            className="
                                    w-full max-w-[1440px]
                                    flex flex-col lg:flex-row
                                    items-center justify-between
                                    gap-6
                                    "
                        >
                            {/* EXPRESS DELIVERY inner pill */}
                            <div
                                className="w-[650px] h-[196px] rounded-[117px] flex items-center justify-between px-10 shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(90.38deg, #F2F2F2 -7.47%, rgba(248, 246, 246, 0) 91.35%)",
                                }}
                            >
                                <div className="leading-tight font-[Mulish]">
                                    <h2 className="text-[34px] md:text-[36px] font-medium text-[#302F2F]">
                                        EXPRESS
                                    </h2>
                                    <h2 className="text-[34px] md:text-[36px] font-medium text-[#007A64] -mt-1">
                                        DELIVERY
                                    </h2>
                                </div>

                                <img
                                    src="/images/truck-delivery.png"
                                    alt="Express Delivery"
                                    className="w-[220px] md:w-[252px] h-auto object-contain"
                                />
                            </div>

                            {/* SPECIAL DISCOUNT inner pill */}
                            <div
                                className="w-[650px] h-[196px] rounded-[117px] flex items-center justify-between px-10 shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(90.38deg, #F2F2F2 -7.47%, rgba(248, 246, 246, 0) 91.35%)",
                                }}
                            >
                                <img
                                    src="/images/gift.png"
                                    alt="Special Discount"
                                    className="w-[220px] md:w-[252px] h-auto object-contain"
                                />

                                <div className="leading-tight font-[Mulish] text-right">
                                    <h2 className="text-[34px] md:text-[36px] font-medium text-[#302F2F]">
                                        SPECIAL
                                    </h2>
                                    <h2 className="text-[34px] md:text-[36px] font-medium text-[#007A64] -mt-1">
                                        DISCOUNT
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
