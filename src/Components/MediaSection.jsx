import React, { useState } from "react";

const media = [
  {
    name: "Business Line",
    logo: "./images/buisnessline.png",
    short: "Industry insights and market trends.",
    details:
      "Business Line covers industry insights and market trends with in-depth analysis. Gemlay, based in Mohali, Chandigarh, has been featured for innovative technology solutions and contributions to the local industry.",
  },
  {
    name: "The Economic Times",
    logo: "./images/economictimes.png",
    short: "Financial news and expert opinions.",
    details:
      "Economic Times provides financial news, stock market updates, and expert opinions. Gemlay has been recognized for its growth in the technology sector and focus on innovation.",
  },
  {
    name: "India Today",
    logo: "./images/indiatoday.png",
    short: "Political, cultural, and lifestyle updates.",
    details:
      "India Today shares political, cultural, and lifestyle updates. Gemlay, headquartered in Mohali, Chandigarh, has been highlighted for its contributions to the tech ecosystem.",
  },
  {
    name: "Business Line",
    logo: "./images/buisnessline.png",
    short: "Deeper coverage and editorials.",
    details:
      "Another Business Line article with deeper coverage and editorials. Gemlay’s story from Mohali, Chandigarh includes industry awards and continuous innovation.",
  },
];

export default function MediaSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white py-16 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-px bg-indigo-300"></div>
          <h2 className="px-4 text-4xl font-bold text-gray-900 whitespace-nowrap">
            STAY UPDATED WITH US
          </h2>
          <div className="w-12 h-px bg-indigo-300"></div>
        </div>
        <p className="text-teal-600 text-sm sm:text-base uppercase tracking-wide">
          Know about what others think
        </p>
      </div>

      {/* Media Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {media.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-8 rounded-xl hover:shadow-xl transition text-center"
          >
            <div className="mb-6">
              <img
                src={item.logo}
                alt={item.name}
                className="mx-auto h-20 sm:h-24 lg:h-28 object-contain"
              />
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-4">{item.short}</p>

            <button
              onClick={() => setSelected(item)}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-full hover:opacity-90 transition"
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>

      {/* Details Panel */}
      {selected && (
        <div className="max-w-3xl mx-auto p-8 mt-12 rounded-3xl bg-white shadow-xl border border-gray-200 relative animate-fadeIn">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          >
            ×
          </button>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{selected.name}</h3>
          <p className="text-gray-700 leading-relaxed text-justify text-lg">{selected.details}</p>
        </div>
      )}
    </section>
  );
}