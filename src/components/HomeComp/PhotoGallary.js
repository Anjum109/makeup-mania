import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/images/photogallary/1.jpg'
import img2 from '../../assets/images/photogallary/2.jpg'
import img3 from '../../assets/images/photogallary/3.jpg'
import img4 from '../../assets/images/photogallary/4.jpg'
import img5 from '../../assets/images/photogallary/5.jpg'
import img6 from '../../assets/images/photogallary/6.jpg'
import { kanit } from '@/font/font'

export default function PhotoGallary() {
  return (
    <div className='grid grid-cols-6 py-12 '>
         <div className='relative group'>
        <Image src={img1} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'> <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button></div>
      </div>
         <div className='relative group'>
        <Image src={img2} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'> <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button></div>
      </div>
         <div className='relative group'>
        <Image src={img3} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'> <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button></div>
      </div>
         <div className='relative group'>
        <Image src={img4} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'> <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button></div>
      </div>
         <div className='relative group'>
        <Image src={img5} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'> <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button></div>
      </div>
         <div className='relative group'>
        <Image src={img6} alt='img' className='object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 hover:transform hover:scale-105' />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
            <button className='bg-red-400 px-5 py-1 text-white rounded-xl'><span className={kanit.className}>Make Appointment</span></button>
        </div>
      </div>
     
    </div>
  )
}
