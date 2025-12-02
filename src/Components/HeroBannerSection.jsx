import React from "react";

export default function HeroImageBanner() {
  return (
    <section className="w-full relative mt-5">
      {/* Banner Section where Akshaya Tritiya banner is displayed */}
      <img
        src="/images/AkshayaTritiya.png"
        alt="Akshaya Tritiya Banner"
        className="
      w-full 
      h-auto 
      max-h-[480px] 
      sm:max-h-[600px] 
      xl:max-h-[700px] 
      object-cover 
      object-center
    "
      />
    </section>
  );
}