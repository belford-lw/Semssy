export default function WhyChooseUs() {
  return (
    <div className="bg-[#0b0f1a] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
      
        <h2 className="text-4xl md:text-5xl font-light">
          Why We’re the <br />
          <span className="italic font-serif">Right Partner</span> for You!
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-center">
        
       
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68eddcd90bd7d85155e13b5f_Why%20Chose%20Img%2001.avif"
            alt="xatolik"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>

        <div className="border border-gray-700 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Creative Approach</h3>
          <p className="text-gray-400 leading-relaxed">
            We think beyond the ordinary crafting fresh, unique ideas that
            make your brand stand out. We think beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
