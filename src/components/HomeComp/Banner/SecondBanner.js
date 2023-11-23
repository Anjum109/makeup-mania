import React, { useState, useEffect } from 'react';
import { kanit } from '@/font/font';
import Image from 'next/image';
import img from '../../../assets/banner/1.png';
import SpaTopic from '../SpaTopic';

export default function SecondBanner() {
 

  return (
    <div className='pb-20 max-w-screen-lg mx-auto mt-12 lg:mt-[200px]'>
      <div className='second-banner-bg'>
        <div
          className='flex justify-center flowermove mix-blend-color-burn'
          
        >
          <Image src={img} alt='img' />
        </div>
        <p className='text-center text-[30px] lg:text-[50px] font-bold lg:mt-[-30px]'>
          <span className={kanit.className}>
            An Incredible <span className='text-red-500'>Spa Experience</span>
          </span>
        </p>
        <p className='text-center mx-12'>
          <span className={kanit.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </span>
        </p>
      </div>
      <div>
        <SpaTopic/>
      </div>
    </div>
  );
}
