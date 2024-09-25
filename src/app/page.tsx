import BrandSection from "@/sections/home-page/brands-section";
import HeroSection from "@/sections/home-page/hero-section";
import OurHappyClientsSection from "@/sections/home-page/our-happy-clients-section";
import OurUniqueApproachSection from "@/sections/home-page/our-unique-approach-section";
import WhatWeDoSection from "@/sections/home-page/what-we-do-section";
import WhatWeOfferSection from "@/sections/home-page/what-we-offer-section";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BrandSection />
      <WhatWeDoSection />
      <OurUniqueApproachSection />
      <WhatWeOfferSection />
      <OurHappyClientsSection />
    </div>
  );
};

export default page;
