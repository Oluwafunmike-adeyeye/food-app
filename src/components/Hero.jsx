import React from 'react';

function Hero() {
  return (
    <div className='max-w-[1640px] mx-4 p-4'>
        <div className='max-h-[600px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center '>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-600'>Best</span></h1>
                <h1 className='px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'><span className='text-red-600'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[600px] object-cover' src="https://media.istockphoto.com/id/1270488568/photo/chili-garlic-noodles-and-paneer-chili.jpg?s=612x612&w=0&k=20&c=0MoBYoCVOFxTn-Tj1blhnQnkAuBIjwCLbr7YQ_ZunUs=" alt="img" />
        </div>
    </div>
  )
}

export default Hero