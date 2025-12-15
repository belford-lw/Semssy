import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[70px] px-6 md:px-10 flex items-center justify-between bg-[#120f1f] fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2 text-white text-xl font-semibold">
        <span>◉</span>
        <span>Semssy</span>
      </div>
      <ul className="hidden md:flex items-center text-sm gap-6 text-gray-300">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">Results</a></li>
      </ul>
      <button className="hidden md:block px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
        Get in Touch
      </button>
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-[#120f1f] md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Results</a></li>
            <button className="mt-2 px-4 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-gray-400">
              Get in Touch
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
