import { bebas } from '@/font/font'
import Image from 'next/image';
import React from 'react'
import img1 from '../../assets/banner/claymask.png'
import img2 from '../../assets/banner/spa.jpg'

import { FaShoppingCart } from "react-icons/fa";

export default function SpaTopic() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 '>
        <div className=' bg-[#f6d6f1] hover:shadow-xl  flex w-full cursor-pointer'>
            <div className='text-pink-800 pb-5 w-[60%] '>
                <h1 className='px-12 pt-12 text-[20px] lg:text-[30px]'> <span className={bebas.className}>Clay Masks</span> </h1>
                <p className='px-12 text-[10px] lg:text-[15px]'>A good clay mask can go a long way
to draw out impurities skin.</p>
<button className='flex  items-center gap-1 lg:gap-3  mx-12 px-3 py-2 border-red-300 rounded-xl mt-5 border-2 bg-white font-bold text-[18px] hover:bg-red-200 transition-all duration-1000'>
<FaShoppingCart/>
<p className='text-[12px]'>Shop Now</p>
</button>
            </div>
            <div className='w-[40%]'>
              <Image src={img1} alt='img1' className='h-full'/>
            </div>
        </div>
        <div className=' bg-[#d7f9cd]  hover:shadow-xl flex w-full cursor-pointer'>
        <div className='w-[40%]'>
              <Image src={img2} alt='img1' className='h-full'/>
            </div>
            <div className='text-green-800 w-[60%] pb-5 '>
                <h1 className='px-12 pt-12 text-[20px] lg:text-[30px]'> <span className={bebas.className}>Wellness & Spa</span> </h1>
                <p className='px-12 text-[10px] lg:text-[15px]'>A good clay mask can go a long way
to draw out impurities skin.</p>
<button className='flex  items-center gap-1 lg:gap-3  mx-12 px-3 py-2 border-green-300 rounded-xl mt-5 border-2 bg-white font-bold text-[18px] hover:bg-green-200 transition-all duration-1000'>
<FaShoppingCart/>
<p className='text-[12px]'>Shop Now</p>
</button>
            </div>
           
        </div>
        
    </div>
  )
}
