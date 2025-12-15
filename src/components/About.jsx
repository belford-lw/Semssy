import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#0b0b18] text-white py-16 md:py-20 px-4 md:px-6">
      <h2
        className="text-2xl md:text-4xl font-semibold text-center leading-snug"
        data-aos="fade-down"
      >
        We're a creative agency dedicated to <br />
        helping brands grow through{" "}
        <span className="font-serif">
          passion, strategy, <br className="hidden md:block" /> design, and innovation.
        </span>
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div
          className="border border-neutral-500 p-8 md:p-10 text-center"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold">05+</h3>
          <p className="text-neutral-500">Years of Experience</p>
        </div>

        <div
          className="md:row-span-2 border border-neutral-500 overflow-hidden h-[300px] md:h-full"
          data-aos="zoom-in"
        >
          <img
            src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68e4f8fcd4e45231a6d0b6e4_About%20Img.avif"
            alt="About"
            className="w-full h-full object-cover"
          />  
        </div>

        <div
          className="border border-neutral-500 p-8 md:p-10 text-center"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold">25+</h3>
          <p className="text-neutral-500">Creative Professionals</p>
        </div>

        <div
          className="border border-neutral-500 p-8 md:p-10 text-center"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold">250+</h3>
          <p className="text-neutral-500">Projects Completed</p>
        </div>

        <div
          className="border border-neutral-500 p-8 md:p-10 text-center"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold">98%</h3>
          <p className="text-neutral-500">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default About;
