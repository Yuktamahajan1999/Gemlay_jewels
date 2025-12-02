import React, { useState } from "react";
import { User } from "lucide-react";
import { toast } from "react-toastify";

export default function DiscoverSection() {
    const [gender, setGender] = useState("All");
    const [email, setEmail] = useState("");
    const handleSubmit = () => {
        if (!email.trim()) {
            toast.error("Please enter a valid email.");
            return;
        }

        let namePart = email.split("@")[0] || "";
        namePart = namePart.replace(/[^a-zA-Z]/g, "");
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase();

        localStorage.setItem("userName", name);
        
        toast.success(`Thank you for signing up, ${name}!`,{
            position:"top-center",
            autoClose:3000
        });
        setEmail("");
    };


    return (
        <section className="w-full py-16 bg-gradient-to-b from-[#F8F8F859] to-[#F8F8F853]">

            <div className="flex justify-center mb-16">
                <h2 className="px-8 py-3 rounded-full border border-[#007A64]
                    text-[#007A64] font-semibold tracking-wide 
                    flex items-center gap-2 text-lg sm:text-xl
                    transition-all duration-300
                    hover:bg-[#007A64] hover:text-white hover:shadow-[0_0_15px_rgba(0,122,100,0.4)]
                    hover:scale-105 cursor-pointer">
                    DISCOVER ALL
                    <span className="text-xl">➤</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
                <div className="text-left">
                    <h2 className="text-[#00392E] text-2xl sm:text-3xl tracking-wide mb-4">
                        SIGN UP TO BE A GARNET LANE INSIDER
                    </h2>
                    <p className="text-[#302F2F] text-sm sm:text-base leading-relaxed">
                        Get promotions, inspirations and the latest news about brands and jewellery items directly in your inbox.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:w-72 px-4 py-3 border border-[#E6E6E6] rounded-lg bg-white outline-none"
                        />
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-[#007A64] text-white rounded-lg font-semibold"
                        >
                            SUBMIT
                        </button>
                    </div>

                    <div className="flex gap-4 text-[#302F2F]">
                        {["All", "Female", "Male"].map((option) => (
                            <button
                                key={option}
                                onClick={() => setGender(option)}
                                className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 ${gender === option
                                        ? "bg-[#007A64] text-white border-[#007A64]"
                                        : "border-[#E6E6E6] text-[#302F2F] hover:border-[#007A64]"
                                    }`}
                            >
                                {option === "Female" || option === "Male" ? (
                                    <span className="flex items-center gap-2">
                                        <User size={16} /> {option}
                                    </span>
                                ) : (
                                    option
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
