import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineCurrencyExchange, MdOutlinePayment, MdOutlineAssuredWorkload, MdEmail, MdPayments, MdReplay, MdLocalShipping } from "react-icons/md";
import { FaMoneyCheckAlt, FaHandshake, FaRegGem, FaCogs } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { PiFilesDuotone, PiHandCoins, PiEyes } from "react-icons/pi";
import { GiGoldBar, GiBigDiamondRing, GiHeartNecklace } from "react-icons/gi";
import { IoDiamond, IoLocation } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { GrCertificate, GrGroup } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { RiHistoryLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { FiMic } from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-[#e2f3f1] text-slate-800 pt-10">
            <div className="border-t border-slate-300" />

            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
                <div>
                    <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Our Services</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <MdOutlineCurrencyExchange className="text-yellow-600" /> GOLD RATES
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <FaMoneyCheckAlt className="text-blue-600" /> DIGITAL GOLD
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <MdOutlinePayment className="text-indigo-600" /> VARIOUS PAYMENT METHODS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <FaHandshake className="text-green-600" /> FINANCING OPTIONS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <MdOutlineAssuredWorkload className="text-purple-600" /> GARNET LANEE ASSURANCE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition">
                                <MdPayments className="text-red-600" /> FRANCHISE ENQUIRY
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Our Policies</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
                                <MdReplay className="text-orange-500" /> 15-DAY RETURNS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
                                <MdLocalShipping className="text-blue-600" /> FREE SHIPPING
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
                                <TbExchange className="text-green-600" /> LIFETIME EXCHANGE POLICY
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
                                <PiHandCoins className="text-yellow-600" /> RETURN AND REFUND POLICY
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
                                <PiFilesDuotone className="text-purple-600" /> TERMS & CONDITIONS ON OFFERS
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Jewellery Knowledge</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <GiGoldBar className="text-yellow-600" /> GOLD GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <GiBigDiamondRing className="text-blue-500" /> DIAMOND GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <GiHeartNecklace className="text-pink-500" /> JEWELLERY GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <IoDiamond className="text-indigo-500" /> SOLITAIRE DIAMOND GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <FaRegGem className="text-purple-500" /> GEMSTONE GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <GrCertificate className="text-green-600" /> CERTIFICATION GUIDE
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition">
                                <IoIosGift className="text-red-500" /> JEWELLERY GIFTING
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">About Us</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <PiEyes className="text-yellow-600" /> OUR VISION
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <AiTwotoneQuestionCircle className="text-blue-600" /> WHY GARNET?
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <VscPreview className="text-pink-500" /> BLOG
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <RiHistoryLine className="text-indigo-600" /> OUR STORY
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <FaCogs className="text-green-600" /> OUR PROCESS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <GrGroup className="text-purple-600" /> OUR TEAM
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <MdRateReview className="text-orange-500" /> REVIEWS & RATINGS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <FiMic className="text-red-500" /> PRESS RELEASE
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Get In Touch</h3>

                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-green-600 transition">
                                <FaWhatsapp className="text-green-600" /> 99888-98866
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-green-600 transition">
                                <MdEmail className="text-red-600" /> info@garnetlanee.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoLocation className="text-blue-600 !text-xl inline-block" />
                            <a href="#" className="hover:text-green-600 transition">
                                Sco.19, Sector 82 JLPL Mohali Airport Road 160055
                            </a>
                        </li>
                    </ul>

                    <div className="flex gap-3 text-lg mt-8">
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-teal-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-teal-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-teal-300">
                            <FaYoutube />
                        </a>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-slate-700">
                            Download Our Application
                        </h3>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-6">
                            {/* Google Play */}
                            <a
                                href="https://play.google.com/store"
                                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl w-[240px] shadow-lg hover:shadow-xl transition-all duration-200"
                                aria-label="Get it on Google Play"
                            >
                                <img
                                    src="/images/playstore.webp"
                                    alt="Google Play logo"
                                    className="h-8 w-8 flex-shrink-0 object-contain"
                                />
                                <div className="flex flex-col text-left">
                                    <span className="text-[11px] text-gray-300 tracking-wide font-medium uppercase">
                                        GET IT ON
                                    </span>
                                    <span className="text-[15px] font-semibold leading-tight">
                                        Google Play
                                    </span>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="https://apple.com/in/app-store"
                                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl w-[240px] shadow-lg hover:shadow-xl transition-all duration-200"
                                aria-label="Download on the App Store"
                            >
                                <img
                                    src="/images/apple.png"
                                    alt="App Store logo"
                                    className="h-8 w-8 flex-shrink-0 object-contain"
                                />
                                <div className="flex flex-col text-left">
                                    <span className="text-[11px] text-gray-300 tracking-wide font-medium uppercase">
                                        DOWNLOAD ON THE
                                    </span>
                                    <span className="text-[15px] font-semibold leading-tight">
                                        App Store
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-[14px] text-slate-700 py-2 whitespace-nowrap">
                <a href="#" className="hover:text-teal-500 transition">SITE MAP</a>
                <span className="mx-2 text-slate-400">|</span>

                <a href="#" className="hover:text-teal-500 transition">PRIVACY POLICY</a>
                <span className="mx-2 text-slate-400">|</span>

                <a href="#" className="hover:text-teal-500 transition">TERMS AND CONDITIONS</a>
                <span className="mx-2 text-slate-400">|</span>

                <a href="#" className="hover:text-teal-500 transition">FAQs</a>
            </div>

            <div className="bg-[#0d4b3a] text-[11px] text-slate-100">
                <div className="max-w-6xl mx-auto px-4 py-3 text-center">
                    COPYRIGHT GARNET LANEE © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
}

export default Footer;