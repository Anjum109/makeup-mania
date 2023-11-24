import Image from 'next/image'
import React from 'react'
import img1 from '../../../assets/banner/aboutus.PNG'
import img2 from '../../../assets/images/dal.png'
import { bebas, cinzel, yatra } from '@/font/font'
import { MdArrowRightAlt } from "react-icons/md";
import { PiFlowerTulipThin } from "react-icons/pi";

export default function SecAboutusBanner() {
    return (
        <div>


            {/* feature  */}
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 max-w-screen-xl mx-auto pb-12'>
                <div className='flex justify-center items-center mx-5 lg:mx-0' >
                    <div>
                        <h1 className='text-center text-[50px]'><span className={yatra.className}>Previous</span></h1>
                        <div className='flex justify-center text-[30px] mb-2'><PiFlowerTulipThin /></div>
                        <p className='text-[15px] text-justify'><span className={cinzel.className}>In the tumultuous business of cutting-in and atten-ding to a whale, there is much running backwards and forwards among the crew.</span></p>
                    </div></div>
                <div className='flex justify-center items-center mx-5 lg:mx-0' >
                    <div>
                        <h1 className='text-center text-[50px]'><span className={yatra.className}>Present</span></h1>
                        <div className='flex justify-center text-[30px] mb-2'><PiFlowerTulipThin /></div>
                        <p className='text-[15px] text-justify'><span className={cinzel.className}>In the tumultuous business of cutting-in and atten-ding to a whale, there is much running backwards and forwards among the crew.</span></p>
                    </div></div>
                <div className='flex justify-center items-center mx-5 lg:mx-0' >
                    <div>
                        <h1 className='text-center text-[50px]'><span className={yatra.className}>Future</span></h1>
                        <div className='flex justify-center text-[30px] mb-2'><PiFlowerTulipThin /></div>
                        <p className='text-[15px] text-justify'><span className={cinzel.className}>In the tumultuous business of cutting-in and atten-ding to a whale, there is much running backwards and forwards among the crew.</span></p>
                    </div></div>
            </div>
            <div className='mt-12'>
                <div className='beautyspa-bg animate-bg'>

                </div>
                <div className='max-w-screen-xl mx-auto lg:mt-[-200px] pb-[200px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
                        <div className='flex justify-center'>
                            <Image src={img1} alt='img1' className=' w-[400px] h-[400px] p-5 shadow-xl shadow-red-200 bg-red-200 rounded-full' style={{ borderTopLeftRadius: '50%' }} />
                        </div>
                        <div className='flex justify-center items-center px-12'>
                            <div>
                                <h1 className='text-[40px] '>
                                    <span className={cinzel.className}>Beauty and Spa Center</span>
                                </h1>
                                <p className='text-[20px] font-semibold py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <p className='text-[12px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore mel ei harum appellantur disputationi</p>
                                <button className='flex gap-1 text-[20px] justify-center  items-center border-2 border-gray-300 rounded-full py-3 px-5 hover:py-4 hover:px-6 bg-red-400 text-white transition-all duration-1000 '><div className='text-[15px] lg:text-[30px] '><MdArrowRightAlt /></div>
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
        </div>
    )
}
