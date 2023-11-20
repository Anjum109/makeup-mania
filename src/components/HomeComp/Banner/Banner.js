import React from 'react'
import banner1 from '../../../assets/banner/banner_layer.PNG'
import Image from 'next/image'
import { bebas, dancing, kanit } from '@/font/font'
import logo from '../../../assets/images/logo/logo.PNG'


export default function Banner() {
  return (
    <div className='bg-[#f3efef] '>
        <div className=' flex justify-between max-w-screen-xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
<div className='flex flex-col items-center gap-3'>
    <div className={dancing.className}>style yourself by your choice</div>
<div className='w-full h-[1px] bg-[#f5b1b1] mt-[-10px]'/></div>
              <h1 className='text-[60px]'><span className={bebas.className}>Experience The Best Beauty </span></h1>  
             <h1 className='text-[50px] mt-[-30px]'><span className={bebas.className}>Services</span></h1>
              <p>WITH</p>
              <h1 className='text-[80px]'><span className={bebas.className}>MAKEUP MANIA</span></h1>
            </div>
            <div>
<Image src={banner1} alt='img' />
            </div>
        </div>
    </div>
  )
}
