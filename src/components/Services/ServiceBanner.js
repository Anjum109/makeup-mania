import React from 'react'
import banner1 from '../../assets/banner/makeup.jpg'
import Image from 'next/image'
import { bebas, dancing, kanit } from '@/font/font'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

export default function ServiceBanner() {
    return (
        <div>

            <div className='pt-5 '>
                <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto'>
                    <div className='lg:flex flex-col justify-center items-center text-center lg:text-start'>
                        <div className='flex flex-col items-center gap-3'>
                            <div className={dancing.className}>style yourself by your choice</div>
                            <div className='w-full h-[1px] bg-[#f5b1b1] mt-[-10px]' /></div>
                        <h1 className='text-[30px] lg:text-[60px]'><span className={bebas.className}> </span></h1>

                        <h1 className=' text-[40px] lg:text-[80px]'><span className={bebas.className}>Our<span className='text-red-400'> SERVICES</span></span></h1>

                        <div className='flex justify-center'>
                            <Link href='/makeappoint'> <button className='flex items-center gap-3 text-sm hover:text-lg hover:px-8 hover:py-4  transition-all duration-1000 py-3 px-6 rounded-full border-2 border-red-200  text-red-50 bg-red-400'>
                                <div className=''>  <FaShoppingCart /></div>
                                <p className={bebas.className}>Make Appointment</p>
                            </button></Link>
                        </div>

                    </div>
                    <div className='hidden lg:block border-t-[15px] border-l-[15px] border-r-[15px] border-red-400 rounded-full mx-12 wave-border-inner '>
                        <div className='border-t-[15px] border-l-[15px] border-r-[15px] border-red-300 rounded-full '>
                            <div className='  border-t-[15px] border-l-[15px] border-r-[15px] border-red-200 rounded-full wave-border-inner'>

                                <Image src={banner1} alt='img' className='rounded-full w-[500px] h-[500px]' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
