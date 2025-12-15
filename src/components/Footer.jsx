import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#1a0b2e] text-white px-4 md:px-20 py-12 md:py-14">
      
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-12">

        <div className="max-w-md" data-aos="fade-up">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">◉</span>
            <h2 className="text-xl font-semibold">Semssy</h2>
          </div>

          <p className="text-sm text-white/80 mb-6 mt-5">
            We think like founders and build like craftspeople.
            Whether it's launching a startup or reimagining tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/30 px-4 py-2 rounded-md outline-none placeholder:text-white/70"
            />
            <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
              Subscribe
            </button>
          </div>
        </div>

        <div className="hidden md:block w-px h-40 bg-white/20" />

        <div data-aos="fade-left">
          <h3 className="text-lg mb-6">Follow us on ...</h3>

          <div className="grid grid-cols-2 gap-x-10 md:gap-x-20 gap-y-4 text-white/80 text-sm">
            <div className="flex items-center gap-3 hover:text-white cursor-pointer" data-aos="fade-right" data-aos-delay="100">
              <span>Facebook</span>
              <FaFacebook />
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer" data-aos="fade-right" data-aos-delay="200">
              <span>Instagram</span>
              <BsInstagram />
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer" data-aos="fade-right" data-aos-delay="300">
              <span>YouTube</span>
              <FaYoutube />
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer" data-aos="fade-right" data-aos-delay="400">
              <span>Dribbble</span>
              <FaDribbble />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
