import React from 'react'
import banner1 from '../../../assets/banner/banner.jpg'
import Image from 'next/image'
import { bebas, dancing, kanit } from '@/font/font'
import { FaShoppingCart } from "react-icons/fa";

export default function Banner() {
  return (
    <div className='pt-5 '>
        <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto'>
            <div className='lg:flex flex-col justify-center items-center text-center lg:text-start'>
<div className='flex flex-col items-center gap-3'>
    <div className={dancing.className}>style yourself by your choice</div>
<div className='w-full h-[1px] bg-[#f5b1b1] mt-[-10px]'/></div>
              <h1 className='text-[30px] lg:text-[60px]'><span className={bebas.className}>Experience The Best Beauty </span></h1>  
             <h1 className='text-[25px] lg:text-[50px] mt-[-15px] lg:mt-[-30px]'><span className={bebas.className}>Services</span></h1>
              <p>WITH</p>
              <h1 className=' text-[40px] lg:text-[80px]'><span className={bebas.className}>MAKEUP <span className='text-red-400'>MANIA</span></span></h1>

<div className='flex justify-center'>
<button className='flex items-center gap-3 text-xl hover:bg-red-100 transition-all duration-1000 py-4 px-5 rounded-full border-2 border-red-200 hover:text-red-600 text-red-200 bg-red-400'>
<div className=''>  <FaShoppingCart/></div>
  <p className={bebas.className}>Make Appointment</p>
</button>
</div>

            </div>
            <div className='border-t-[15px] border-l-[15px] border-r-[15px] border-red-400 rounded-full mx-12 wave-border-inner hidden lg:block'>
           <div className='border-t-[15px] border-l-[15px] border-r-[15px] border-red-300 rounded-full '>
          <div className=' hidden lg:block border-t-[15px] border-l-[15px] border-r-[15px] border-red-200 rounded-full wave-border-inner'>
           
<Image src={banner1} alt='img' className='rounded-full w-[500px] h-[500px]'/>
          
           </div>
          </div>
           </div>
        </div>
    </div>
  )
}
