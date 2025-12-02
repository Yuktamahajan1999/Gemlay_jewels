import React, { useState } from "react";

const reviews = [
    {
        name: "Aarushi",
        date: "June 12, 2023",
        quote:
            "Gemlay's craftsmanship is truly elegant. The necklace I ordered was exactly as shown and arrived beautifully packaged. Customer support was responsive and helpful throughout.",
        ratings: "★★★★★",
    },
    {
        name: "Ravi",
        date: "August 3, 2023",
        quote:
            "I loved the design range, especially the fusion pieces. Delivery was slightly delayed, but the product quality made up for it. Would recommend for gifting.",
        ratings: "★★★★☆",
    },
    {
        name: "Meera",
        date: "October 18, 2023",
        quote:
            "Gemlay’s website is easy to navigate and the checkout process was smooth. The earrings I received were stunning, though the clasp felt a bit delicate.",
        ratings: "★★★☆☆",
    },
    {
        name: "Kabir",
        date: "November 5, 2023",
        quote:
            "Customer service was polite but slow to respond. The ring I ordered looked good but sizing was off. Exchange process took longer than expected.",
        ratings: "★★☆☆☆",
    },
    {
        name: "Simran",
        date: "December 1, 2022",
        quote:
            "I had high hopes but the bracelet felt lighter than expected. Packaging was nice, but overall experience was average. Might try again for a different category.",
        ratings: "★☆☆☆☆",
    },
    {
        name: "Himesh",
        date: "May 25, 2022",
        quote:
            "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave outlinks and personal information.",
        ratings: "★★★☆☆",
    },
];

export default function CustomerReviews() {
    const [showAll, setShowAll] = useState(false);
    const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

    return (
        <section
            className="w-full py-20 px-6 border-t"
            style={{
                background:
                    "linear-gradient(90.08deg, rgba(246, 251, 250, 0.692255) -31.6%, rgba(239, 239, 239, 0.366895) 47.98%, rgba(238, 238, 238, 0.692255) 133.37%)",
                border: "1px solid #EFEFEF",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-10 h-px bg-[#007A64]"></div>
                        <h2 className="px-4 text-3xl sm:text-4xl font-semibold text-[#00392E] tracking-wide">
                            CUSTOMER REVIEWS
                        </h2>
                        <div className="w-10 h-px bg-[#007A64]"></div>
                    </div>
                    <p className="text-[#007A64] mt-2 tracking-wider text-base sm:text-lg uppercase">
                        KNOW ABOUT WHAT OTHERS THINK
                    </p>
                </div>

                {/* Reviews Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visibleReviews.map((review, index) => (
                        <div
                            key={index}
                            className="rounded-2xl shadow-sm bg-white border border-[#EDEDED] px-8 py-10 relative"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(248,248,248,0.70) 0%, rgba(255,255,255,0.95) 100%)",
                            }}
                        >
                            <div className="absolute top-4 right-6 text-[#79D6C6] text-5xl opacity-70">
                                &#10077;
                            </div>
                            <h3 className="text-lg text-[#00392E] font-semibold">{review.name}</h3>
                            <p className="text-sm text-[#007A64] mb-4">{review.date}</p>
                            <p className="text-gray-700 leading-relaxed mb-6">{review.quote}</p>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                <img src="/images/Google.png" alt="Google" className="h-5" />
                                {/* Ratings */}
                                <div className="flex gap-1 text-[#007A64] text-lg">
                                    {review.ratings}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* READ MORE Button */}
                <div className="flex justify-center mt-14">
                    {showAll ? (
                        <button
                            onClick={() => setShowAll(false)}
                            className="px-10 py-3 border border-red-500 text-red-500 rounded-full font-semibold tracking-wide hover:bg-red-500 hover:text-white transition shadow-sm"
                        >
                            CLOSE
                        </button>
                    ) : (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-10 py-3 border border-[#007A64] text-[#007A64] rounded-full font-semibold tracking-wide hover:bg-[#007A64] hover:text-white transition shadow-sm"
                        >
                            READ MORE
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}