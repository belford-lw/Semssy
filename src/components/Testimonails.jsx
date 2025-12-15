export default function Testimonials() {
  return (
    <div className="bg-[#0b0f1a] text-white py-16 md:py-24 px-4 md:px-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-light leading-snug">
          Real Results That Turn <br />
          <span className="italic font-serif">Clients Into Partners</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        <div className="border border-gray-700 p-6 md:p-10 rounded-xl relative">
          <h3 className="text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed6d2747316c9a4ac6df84_Testimonials%20Icon.svg"
              alt="Testimonial Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            Alt+Shift
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            “Since we switched to this platform, our conversion rate has
            skyrocketed by 30% in just one month! The automated follow-ups
            have been a game changer, saving us countless hours.”
          </p>
          <div className="mb-6">
            <p className="font-semibold">Alex Morgan</p>
            <p className="text-sm text-gray-400">
              Digital Marketing Specialist
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-10 justify-center md:justify-start">
            <button className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition">
              ←
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition">
              →
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed6ecff95bccbf43ba7e8e_Testimonials%20Img%2001.avif"
            alt="Testimonial"
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
