export default function WhyChooseUs() {
  return (
    <div className="bg-[#0b0f1a] text-white py-16 md:py-20 px-4 md:px-20">
      
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-light leading-snug">
          Why We're the <br />
          <span className="italic font-serif">Right Partner</span> for You!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">

        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68eddcd90bd7d85155e13b5f_Why%20Chose%20Img%2001.avif"
            alt="Why Choose Us"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm"
          />
        </div>

        <div className="md:col-span-2 border border-gray-700 p-6 md:p-8 rounded-xl">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            Creative Approach
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            We think beyond the ordinary crafting fresh, unique ideas that
            make your brand stand out. We think beyond.
          </p>
        </div>

      </div>
    </div>
  );
}
