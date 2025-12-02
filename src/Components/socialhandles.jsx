import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialHandle() {
    return (
        <section className="bg-white py-12 px-4 text-center">
            <h2 className="text-xl md:text-2xl text-slate-800 mb-6">
                WE WOULD LOVE TO MEET YOU ON OUR HANDLES
            </h2>
            <div className="flex justify-center gap-6 mt-4">
                <Link to="/facebook"
                    className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:brightness-110 transition">
                    <FaFacebookF className="text-white text-xl" />
                </Link>

                <Link to="/instagram"
                    className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:brightness-110 transition">
                    <FaInstagram className="text-white text-xl" />
                </Link>

                <Link to="/youtube"
                    className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center hover:brightness-110 transition">
                    <FaYoutube className="text-white text-2xl" />
                </Link>
            </div>
        </section>
    );
}