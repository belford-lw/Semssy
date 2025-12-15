import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <header className="w-full h-[70px] px-6 md:px-10 flex items-center justify-between bg-[#120f1f] fixed top-0 left-0 z-50">
      
      <div
        className="flex items-center gap-2 text-white text-xl font-semibold"
        data-aos="fade-right"
      >
        <span>◉</span>
        <span>Semssy</span>
      </div>

      <ul
        className="hidden md:flex items-center text-sm gap-6 text-gray-300"
        data-aos="fade-down"
      >
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">Results</a></li>
      </ul>

      <button
        className="hidden md:block px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400"
        data-aos="fade-left"
      >
        Get in Touch
      </button>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div
          className="absolute top-[70px] left-0 w-full bg-[#120f1f] md:hidden"
          data-aos="fade-down"
        >
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300 text-sm">
            <li data-aos="fade-up" data-aos-delay="100">
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="150">
              <a href="#" className="hover:text-white">About</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="hover:text-white">Services</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="250">
              <a href="#" className="hover:text-white">Results</a>
            </li>
            <button
              className="mt-2 px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Get in Touch
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
