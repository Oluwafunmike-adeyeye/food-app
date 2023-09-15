import React from 'react';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-4 p-4 py-12 grid md:grid-cols-4 gap-6'>
        {/* Card */}
        <div className='rounded-xl w-[310px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>Everyday Affordable Meals</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> 
            </div>
            <img 
                className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.chicken-republic.com/wp-content/uploads/2021/09/3-REFUEL-SPICY-RICE-MEAL.jpg" alt="" />
        </div>

        {/* Card */}
        <div className='rounded-xl w-[310px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>Tasty Sides</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> 
            </div>
            <img 
                className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.chicken-republic.com/wp-content/uploads/2021/09/CHICKEN-PIES-DARK.jpg" alt="" />
        </div>

        {/* Card */}
        <div className='rounded-xl w-[310px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>Soulfully Spiced Fried Chicken</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> 
            </div>
            <img 
                className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.chicken-republic.com/wp-content/uploads/2021/09/CHICKEN-PIECES-DARK.jpg" alt="" />
        </div>

        {/* Card */}
        <div className='rounded-xl w-[310px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>Flame Grilled Chicken</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> 
            </div>
            <img 
                className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://www.chicken-republic.com/wp-content/uploads/2021/09/ChickenRepublic_FullFlameGrilled.jpg" alt="" />
        </div>
    </div>
  )
}

export default Cards;