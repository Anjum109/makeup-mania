import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/banner/beautyspa.jpg'
import img2 from '../../assets/images/dal.png'
import { cinzel } from '@/font/font'
import { MdArrowRightAlt } from "react-icons/md";

export default function BeautySpa() {
  return (
  <div className=''>
    <div className='beautyspa-bg animate-bg'>

    </div>
      <div className='max-w-screen-xl mx-auto lg:mt-[-200px] pb-[200px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
            <div className='flex justify-center'>

                <Image src={img2} alt='img1' className='img2 me-[-150px] z-10'/>
                <Image src={img1} alt='img1' className='rounded-full  w-[400px] h-[400px]'/>
            </div>
            <div className='flex justify-center items-center px-12'>
                <div>
                    <h1 className='text-[40px] '>
                   <span className={cinzel.className}>Beauty and Spa Center</span> 
                    </h1>
                    <p className='text-[20px] font-semibold py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className='text-[12px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore mel ei harum appellantur disputationi</p>
                    <button className='flex gap-1 text-[20px] justify-center  items-center border-2 border-gray-300 rounded-full p-3 hover:bg-red-100 bg-red-400 text-white transition-all duration-1000 hover:text-red-900'><div className='text-[30px] '><MdArrowRightAlt/></div>
                        <div>  </div>
                        <span className={cinzel.className}>Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='beautyspa2-bg animate2-bg'>

    </div>
  </div>
  )
}
