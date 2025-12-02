import React from "react";

export default function HeroImageBanner() {
  return (
    <section className="w-full h-[480px] relative mt-[20px] overflow-hidden">
        {/* Banner Section where Akshaya Tritiya banner is displayed */}
      <img
        src="/images/AkshayaTritiya.png"
        alt="Akshaya Tritiya Banner"
        className="w-full h-full object-cover"
      />
    </section>
  );
}