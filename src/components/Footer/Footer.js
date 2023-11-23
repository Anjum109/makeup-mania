import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/logo/logo.png'
import Link from 'next/link'
import { cinzel, smooch_sans } from '@/font/font'
import { TfiArrowCircleRight } from "react-icons/tfi";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='bg-gray-300 '>
      <div className='h-[500px] py-20 max-w-screen-lg mx-auto'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <Image src={logo} alt='logo' className='w-[45px] lg:w-[55px]' />
            <h4 className='text-[30px] lg:text-[40px]'> <span className={smooch_sans.className}>Makeup Mania</span> </h4>
          </div></Link>
        <div className='my-5 mx-4 h-[50px] flex items-center'>
          <input type='email' className='w-[300px] outline-none h-full rounded-s-full px-5' placeholder='Enter Your Email' />
          <button className='bg-red-500 h-full rounded-e-full w-[80px] text-[30px] flex justify-center items-center text-white hover:text-red-500 hover:bg-red-200 transitision-all duration-1000'>
            <TfiArrowCircleRight />
          </button>
        </div>
        <div className='mx-5 lg:mx-0 flex flex-col lg:flex-row lg:justify-between items-center my-12 gap-12'>
          <div className={cinzel.className}>
            <h1 className='text-[40px]'>About Us</h1>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={cinzel.className}>
            <h1 className='text-[40px]'>Important Links</h1>
            <div className='text-[12px] text-center'>
              <ul>
                <li>*********</li>
                <li>*********</li>

              </ul>
            </div>
          </div>
          <div className={cinzel.className}>
            <h1 className='text-[40px]'>Contact Us</h1>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

      </div>
      <div className='flex justify-end items-center mt-[180px] lg:mt-12 text-[30px] gap-5 me-6 pb-12 '>
        <div className='hover:text-red-400 trasition transition-all duration-1000 text-gray-700 cursor-pointer'>
          <FaFacebook />
        </div>
        <div className='hover:text-red-400 trasition transition-all duration-1000 text-gray-700 cursor-pointer'>
          <RiWhatsappFill />
        </div>
        <div className='hover:text-red-400 trasition transition-all duration-1000 text-gray-700 cursor-pointer'>
          <FaLinkedin />
        </div>
        <div className='hover:text-red-400 trasition transition-all duration-1000 text-gray-700 cursor-pointer'>
          <FaTwitter />
        </div>
      </div>
    </div>
  )
}
