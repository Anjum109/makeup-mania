import { bebas } from '@/font/font'
import React from 'react'

import { FaShoppingCart } from "react-icons/fa";

export default function SpaTopic() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 mx-5 '>
        <div className=' bg-[#f6d6f1] hover:shadow-xl pb-12'>
            <div className='text-pink-800'>
                <h1 className='px-12 pt-12 text-[30px]'> <span className={bebas.className}>Clay Masks</span> </h1>
                <p className='px-12'>A good clay mask can go a long way
to draw out impurities skin.</p>
<button className='flex  items-center gap-3 mx-12 px-3 py-2 border-red-300 rounded-xl mt-5 border-2 bg-white font-bold text-[18px] hover:bg-red-200 '>
<FaShoppingCart/>
<p>Shop Now</p>
</button>
            </div>
        </div>
        <div className=' bg-[#d7f9cd]  hover:shadow-xl pb-12'>
            <div className='text-green-800'>
                <h1 className='px-12 pt-12 text-[30px]'> <span className={bebas.className}>Wellness & Spa</span> </h1>
                <p className='px-12'>A good clay mask can go a long way
to draw out impurities skin.</p>
<button className='flex  items-center gap-3 mx-12 px-3 py-2 border-green-300 rounded-xl mt-5 border-2 bg-white font-bold text-[18px] hover:bg-green-200 '>
<FaShoppingCart/>
<p>Shop Now</p>
</button>
            </div>
        </div>
        
    </div>
  )
}
