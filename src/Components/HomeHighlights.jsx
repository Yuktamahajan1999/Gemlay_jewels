import React from "react";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const categories = [
    { name: "Rings", img: "/images/ring.webp", path: "/discover-all/rings" },
    { name: "Earrings", img: "/images/rose-earring.jpg", path: "/discover-all/earrings" },
    { name: "Tanmaniya", img: "/images/tanmaniya.webp", path: "/discover-all/tanmaniya" },
    { name: "Bangles", img: "/images/Jewellery/bangles.webp", path: "/discover-all/bracelets-bangles" },
    { name: "Bracelets", img: "/images/bracelet.webp", path: "/discover-all/bracelets-bangles" },
    { name: "Pendants", img: "/images/diamond-pendant.webp", path: "/discover-all/pendants" },
    { name: "Rings", img: "/images/menring.jpeg", path: "/discover-all/rings" },
];

export default function HomeHighlights() {
    return (
        <div className="w-full bg-white pb-20 relative">
            {/* SPIN TO WIN */}
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
                    <div className="relative w-full mt-10 px-4 sm:px-8 lg:px-16 pt-20">
                        <IoArrowBackCircleSharp
                            className="hidden lg:flex items-center justify-center
                                absolute top-[60%] -translate-y-1/2 left-[16px]
                                w-10 h-10 rounded-full bg-white shadow-md
                                text-teal-700 text-2xl cursor-pointer
                                hover:bg-teal-700 hover:text-white
                                transition"
                        />





                        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-6">
                            {categories.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className="text-center min-w-[100px] sm:min-w-[120px]"
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

                        <IoArrowForwardCircleSharp
                            className="hidden lg:flex items-center justify-center
                                absolute top-[60%] -translate-y-1/2 left-[1110px]
                                w-10 h-10 rounded-full bg-white shadow-md
                                text-teal-700 text-2xl cursor-pointer
                                hover:bg-teal-700 hover:text-white
                                transition"
                        />

                    </div>
                    <div className=" relative w-[260px] h-[150px] hidden md:block">
                        <div className="absolute inset-y-0 left-0 z-10">
                            <div className="w-[13px] h-full bg-[linear-gradient(180deg,#012433_0%,#007A64_100%)] rounded-l-[10px]"></div>
                        </div>

                        <div className="absolute left-[13px] top-0 w-[247px] h-full 
      bg-white border-[2px] border-[#007A64] 
      rounded-tr-[10px] rounded-br-[10px] 
      shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] z-20 
      flex flex-col items-center justify-start pt-[12px]">

                            <img
                                src="/images/rings.png"
                                alt="Ring"
                                className="w-[58px] h-[62px] object-cover"
                            />

                            <p
                                className="w-[104px] h-[18px] 
             text-center 
             font-[Mulish] font-normal 
             text-[10px] leading-[18px] 
             tracking-[-0.28px] 
             text-[#C90000]">
                                Anuya from Hyderabad
                            </p>

                            <p
                                className="w-[117px] h-[18px] 
             text-center 
             font-[Mulish] font-bold 
             text-[10px] leading-[18px] 
             tracking-[-0.28px] 
             text-[#302F2F]">
                                Carry Fire Diamond Rings
                            </p>

                            <p
                                className="w-[88px] h-[18px] 
             text-center 
             font-[Mulish] font-semibold 
             text-[9px] leading-[18px] 
             tracking-[-0.28px] 
             text-[#C90000]">
                                about 10 minutes ago
                            </p>
                        </div>
                    </div>


                    {/* MESSAGE ICON */}
                    <button
                        className="
              absolute right-6 top-4 z-30 
              w-12 h-12 rounded-full 
              bg-gradient-to-tr from-[#007A64] to-[#00A38A] 
              flex items-center justify-center 
              shadow-md hover:scale-110 transition
              md:static md:mt-4 md:ml-auto
            "
                    >
                        <MdMessage className="text-white text-2xl" />
                    </button>

                    {/* EXPRESS DELIVERY + SPECIAL DISCOUNT */}
                    <div className="w-full flex justify-center mt-6 px-4">
                        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div
                                className="w-full lg:w-[48%] h-[196px] rounded-[117px] flex items-center justify-between px-6 sm:px-10 shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(90.38deg, #F2F2F2 -7.47%, rgba(248, 246, 246, 0) 91.35%)",
                                }}
                            >
                                <div className="leading-tight font-[Mulish]">
                                    <h2 className="text-[28px] md:text-[34px] font-medium text-[#302F2F]">
                                        EXPRESS
                                    </h2>
                                    <h2 className="text-[28px] md:text-[34px] font-medium text-[#007A64] -mt-1">
                                        DELIVERY
                                    </h2>
                                </div>

                                <img
                                    src="/images/truck-delivery.png"
                                    alt="Express Delivery"
                                    className="w-[160px] md:w-[220px] lg:w-[252px] h-auto object-contain"
                                />
                            </div>

                            <div
                                className="w-full lg:w-[48%] h-[196px] rounded-[117px] flex items-center justify-between px-6 sm:px-10 shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(90.38deg, #F2F2F2 -7.47%, rgba(248, 246, 246, 0) 91.35%)",
                                }}
                            >
                                <img
                                    src="/images/gift.png"
                                    alt="Special Discount"
                                    className="w-[160px] md:w-[220px] lg:w-[252px] h-auto object-contain"
                                />

                                <div className="leading-tight font-[Mulish] text-right">
                                    <h2 className="text-[28px] md:text-[34px] font-medium text-[#302F2F]">
                                        SPECIAL
                                    </h2>
                                    <h2 className="text-[28px] md:text-[34px] font-medium text-[#007A64] -mt-1">
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