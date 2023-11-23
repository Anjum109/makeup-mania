import React from 'react'

import flowervous from '../../assets/images/fuldani.png'
import img1 from '../../assets/images/priceplans/aroma.jpg'
import img2 from '../../assets/images/priceplans/make.jpg'
import img3 from '../../assets/images/priceplans/body.jpg'
import img4 from '../../assets/images/priceplans/face facial.jpg'
import img5 from '../../assets/images/priceplans/massage.jpg'
import img6 from '../../assets/images/priceplans/smell.jpg'
import img7 from '../../assets/images/priceplans/therapy.jpg'
import img8 from '../../assets/images/priceplans/relax.jpg'
import Image from 'next/image'
import { cinzel, yatra } from '@/font/font'

export default function PricePlans() {
  return (
    <div className='pinkf mt-[200px] mx-5 lg:mx-0'>
        <div className=' max-w-screen-xl mx-auto py-12'>
            {/* head  */}
        <div>
        <div
          className='flex justify-start flowermove mix-blend-color-burn ms-5'
         
        >
          <Image src={flowervous} alt='img' />
        </div>
        <div className='text-[50px] text-start mt-[-30px]'>
       <h1 className={cinzel.className}>
        Price <span className='text-red-400'>Plans</span>
        </h1>
       </div>
       <p className='lg:pe-[200px] text-[14px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        {/* content  */}
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-12'>
            {/* 1 */}
            <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img1} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Aroma therapy</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 2 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img2} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>MakeUp</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 3 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img3} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>MakeUp</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 4 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img4} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Face facial</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 5 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img5} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Massage therapy</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 6 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer '>
               <div className='flex items-center gap-4'>
               <Image src={img6} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Sauna relax</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 7 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img7} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Backbone Therapy</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
              {/* 8 */}
              <div className='flex justify-between items-center border-b-2 border-gray-300 py-3 cursor-pointer'>
               <div className='flex items-center gap-4'>
               <Image src={img8} alt='img1' className='rounded-xl w-[80px] h-[50px]'/>
                <div>
                    <h1 className={yatra.className}>Geothermal spa</h1>
                    <p className='text-[12px] text-gray-400'>20 mins Revitalize Facial</p>
                </div>
               </div>
               <div>
                <p className={yatra.className}>From $50</p>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}
