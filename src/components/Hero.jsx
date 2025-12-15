import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-around bg-[#1c1535] h-[100vh]'>
      <div className='mt-[250px]'>
        <h1 className='text-[50px] font-bold text-white'>Crafting Stories <br /> <span className='italic'>Through Dev <br /> Strategy</span></h1>
        <p className='text-white mt-[30px]'>We think like founders and build like craftspeople. Whether it's launching <br /> a startup or reimagining enterprise tools, we dive deep into your world.</p>
        <div className='mt-[30px] flex gap-4'>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">Our Services</button>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">Our Portfolio</button>
        </div>
      </div>

      <div className='mt-[250px]'>
        <div className='flex gap-5'>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">DESIGN</button>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">STRATEGY</button>
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded-md cursor-pointer hover:bg-gray-400">RESULTS</button>
        </div>    
          <img src="https://cdn.prod.website-files.com/68e062a50b7b84e9f4ada855/68ed61452f0c685431227e0a_Slider%20Img%2002.avif" alt="Xatolik" className='w-[70%] mt-[20px] rounded-2xl'/>
      </div>
    </div>
  )
} 

export default Hero