import { FaFacebook, FaYoutube} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1a0b2e] text-white px-20 py-14">
      <div className="flex items-start justify-around">
        <div>
          <div className="flex items-center gap-2 ">
            <span className="text-lg font-bold">◉</span>
            <h2 className="text-xl font-semibold">Semssy</h2>
          </div>
          <p className="text-sm text-white mb-6 mt-[20px]">
            We think like founders and build like craftspeople.
            Whether it's launching a startup or reimagining tools.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 border border-white px-4 py-2 rounded-md outline-none placeholder:text-white"
            />
            <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">Subcribe</button>
          </div>
        </div>
        <div className="w-px h-40 bg-white/20" />
        <div>
          <h3 className="text-lg mb-6">Follow us on ...</h3>
          <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-white/80">
            <div className="flex items-center gap-3">
              <h1>Facebook</h1>
              <FaFacebook />
            </div>
            <div className="flex items-center gap-3">
              <h1>Instagram</h1>
              <BsInstagram />
            </div>
            <div className="flex items-center gap-3">
              <h1>YouTube</h1>
              <FaYoutube />
            </div>
            <div className="flex items-center gap-3">
              <h1>Dribbble</h1>
              <FaDribbble />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
