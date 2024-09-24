"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full relative h-[700px] border-t border-white/[0.15]">
      <div className="relative z-[-1]">
        <Image src={'/home-page/hero-bg.svg'} alt="section bg img" className="absolute min-w-[121vw] left-[-135px] top-[-435px]" width={1535} height={669} />
      </div>
      {/* <Image src={'/star.svg'} alt="star-img" width={108} height={90} className="absolute left-10 top-12" /> */}
      <div className="flex justify-between items-center px-[70px] my-[175px]">
        <div className="w-[48%] h-fit">
          <p className="text-xl font-medium pb-7 text-[#949494]">AI-Driven Technology Solutions Provider</p>
          <p className="text-[50px] block w-[75%] font-bold">Empower Your Business
            With Insights, Not Just Data
          </p>
          <span className="text-xl text-[#949494] font-medium block w-[70%] pt-6">Effortlessly enhance decision-making with AI, combining superior data quality, cost efficiency, and intelligent solutions.</span>
        </div>
        <div className="h-[525px] w-[49%] bg-black rounded-[20px]">
          {/* <Image src={'/home-page/hero-gif.svg'} alt="hero gif" width={770} height={525} className="w-full" /> */}
          <video
            src="/home-page/hero-gif.mp4"
            width="770"
            height="525"
            className="w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
