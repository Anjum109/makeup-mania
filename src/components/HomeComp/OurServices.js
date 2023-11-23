import { bebas, cinzel, kanit } from '@/font/font'
import React, { useEffect, useState } from 'react'
import flowervous from '../../assets/images/fuldani.png'
import Image from 'next/image'
import img1 from '../../assets/images/services/stone.png'
import img2 from '../../assets/images/services/monm.png'
import img3 from '../../assets/images/services/mortal.png'
import img4 from '../../assets/images/services/bottle.png'

export default function OurServices() {

  return (
  <div className='pinkf'>
      <div className='py-20 max-w-screen-lg mx-auto'>
       <div
          className='flex justify-center flowermove mix-blend-color-burn'
         
        >
          <Image src={flowervous} alt='img' />
        </div>
       <div className='text-[50px] text-center mt-[-30px]'>
       <h1 className={cinzel.className}>
        Our <span className='text-red-400'>Services</span>
        </h1>
       </div>
    <p className='text-center text-[16px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20 mx-5 lg:mx-0 '>
        <div className='flex flex-col justify-center items-center bg-pink-200 hover:bg-pink-50 transition-all duration-1000 hover:border-2 hover:border-pink-200 p-8 cursor-pointer ' style={{borderTopLeftRadius:'90px',borderTopRightRadius:'150px',borderBottomLeftRadius:'80px',borderBottomRightRadius:'60px'}}>
            <div>
                <Image src={img1} alt='img1' className='w-[100px]' />
            </div>
            <p className='text-[30px] font-bold text-gray-700 hover:text-red-400 transition-all duration-1000'><span className={kanit.className}>Stone spa</span></p>
            <p className='text-center text-[13px] text-gray-500'>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-pink-200 hover:bg-pink-50 transition-all duration-1000 hover:border-2 hover:border-pink-200 p-5 cursor-pointer ' style={{borderTopLeftRadius:'200px',borderTopRightRadius:'90px',borderBottomLeftRadius:'80px',borderBottomRightRadius:'90px'}}>
            <div>
                <Image src={img2} alt='img1' className='w-[200px]' />
            </div>
            <p className='text-[25px] font-bold text-gray-700 hover:text-red-400 transition-all duration-1000'><span className={kanit.className}>Candle Message</span></p>
            <p className='text-center text-[13px] text-gray-500'>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-pink-200 hover:bg-pink-50 transition-all duration-1000 hover:border-2 hover:border-pink-200 p-5 cursor-pointer ' style={{borderTopLeftRadius:'100px',borderTopRightRadius:'200px',borderBottomLeftRadius:'80px',borderBottomRightRadius:'90px'}}>
            <div>
                <Image src={img3} alt='img1' className='w-[200px]' />
            </div>
            <p className='text-[25px] font-bold text-gray-700 hover:text-red-400 transition-all duration-1000'><span className={kanit.className}>Mortar</span></p>
            <p className='text-center text-[13px] text-gray-500'>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-pink-200 hover:bg-pink-50 transition-all duration-1000 hover:border-2 hover:border-pink-200 p-5 cursor-pointer ' style={{borderTopLeftRadius:'200px',borderTopRightRadius:'100px',borderBottomLeftRadius:'80px',borderBottomRightRadius:'90px'}}>
            <div>
                <Image src={img4} alt='img1' className='w-[100px]' />
            </div>
            <p className='text-[25px] font-bold text-gray-700 hover:text-red-400 transition-all duration-1000'><span className={kanit.className}>Medicine</span></p>
            <p className='text-center text-[13px] text-gray-500'>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
    </div>
    </div>
      {/* background image animation  */}
  <div className='flowerstoneservice mt-[-180px]' />
  </div>
  )
}
