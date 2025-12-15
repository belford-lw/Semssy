export default function Testimonials() {
  return (
    <div className="bg-[#0b0f1a] text-white py-24 px-6 md:px-20">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light">
          Real Results That Turn <br />
          <span className="italic font-serif">Clients Into Partners</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-14 items-center">
        
        <div className="border border-gray-700 p-10 rounded-xl relative">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed6d2747316c9a4ac6df84_Testimonials%20Icon.svg"
              alt="xatolik"
              className="w-25 h-25"
            />
            Alt+Shift
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            “Since we switched to this platform, our conversion rate has
            skyrocketed by 30% in just one month! The automated follow-ups
            have been a game changer, saving us countless hours.”
          </p>

          <div>
            <p className="font-semibold">Alex Morgan</p>
            <p className="text-sm text-gray-400">
              Digital Marketing Specialist
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            <button className="w-12 h-12 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition">
              ←
            </button>
            <button className="w-12 h-12 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition">
              →
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed6ecff95bccbf43ba7e8e_Testimonials%20Img%2001.avif"
            alt="xatolik"
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
