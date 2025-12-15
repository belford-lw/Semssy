import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#1c1535] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-0">
      
      <div className="max-w-xl text-center md:text-left" data-aos="fade-right">
        <h1 className="text-3xl md:text-[50px] font-bold text-white leading-tight">
          Crafting Stories <br />
          <span className="italic">
            Through Dev <br /> Strategy
          </span>
        </h1>
        <p className="text-white/80 mt-6 text-sm md:text-base">
          We think like founders and build like craftspeople. Whether it's
          launching a startup or reimagining enterprise tools, we dive deep into
          your world.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
            Our Services
          </button>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
            Our Portfolio
          </button>
        </div>
      </div>

      <div className="mt-14 md:mt-0 flex flex-col items-center md:items-end" data-aos="fade-left">
        <div className="flex gap-3 mb-5 flex-wrap justify-center md:justify-end" data-aos="fade-up" data-aos-delay="200">
          <button className="px-3 py-2 text-xs md:text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
            DESIGN
          </button>
          <button className="px-3 py-2 text-xs md:text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
            STRATEGY
          </button>
          <button className="px-3 py-2 text-xs md:text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
            RESULTS
          </button>
        </div>
        <img
          src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed61452f0c685431227e0a_Slider%20Img%2002.avif"
          alt="Hero"
          className="w-full md:w-[70%] rounded-2xl"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
      </div>

    </div>
  );
};

export default Hero;
