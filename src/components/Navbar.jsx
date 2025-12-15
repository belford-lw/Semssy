const Navbar = () => {
  return (
    <header className="w-full h-[70px] px-10 flex items-center justify-between bg-[#120f1f] fixed">
      <div className="flex items-center gap-2 text-white text-xl font-semibold">
        <span>◉</span>
        <span>Semssy</span>
      </div>
      <ul className="flex items-center text-sm gap-6 text-gray-300">
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white"> Portfolio</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">Pricing</a></li>
      </ul>
      <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">Get in Touch</button>
    </header>
  );
};

export default Navbar;
