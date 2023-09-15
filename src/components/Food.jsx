import React, { useState } from 'react';
import menuData from "../data/menuData.json"

const Food = () => {
    // console.log(menuData)
    const [menu, setMenu] = useState(menuData);

    // Filter Type 
    const filterType = (category) => {
        setMenu (
            menuData.filter((item) => {
                return item.category === category;
            })
        );
    };



  return (
    <div className='max-w-[1640px] m-4 px-4 py-12'>
        <h1 className='text-red-600 font-bold text-4xl text-center pb-8'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Types</p>
                <div className='flex flex-wrap'>
                    <button onClick={()=> setMenu(menuData)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>All</button>

                    <button onClick={() => filterType('Rice')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Rice</button>

                    <button  onClick={() => filterType('Swallow')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Swallow</button>

                    <button  onClick={() => filterType('Chicken')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Chicken</button>

                    <button  onClick={() => filterType('Snacks')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Snacks</button>
                </div>
            </div>  

        </div>

    {/* Display Menu */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
            {menu.map((item, index)=> (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-red-600 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Food;