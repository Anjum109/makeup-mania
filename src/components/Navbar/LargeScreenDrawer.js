import { cinzel, smooch_sans } from '@/font/font';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import logo from '../../assets/images/logo/logo.png'
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function LargeScreenDrawer() {
  const [activeButton, setActiveButton] = useState('');
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    setActiveButton(path);
  }, [router.pathname]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className='flex items-center'>
        {isDrawerOpen ? (
          <button onClick={handleDrawerToggle}>
            <ImCross size={25} />
          </button>
        ) : (
          <button onClick={handleDrawerToggle}>
            <GiHamburgerMenu size={30} />
          </button>
        )}
      </div>
      {/* Overlay with blur effect */}
      {isDrawerOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40 blur-md z-40'
          onClick={handleDrawerToggle}
        />
      )}
      <div
        className={`fixed top-[12%] right-0 w-[400px] h-full text-center bg-red-100 overflow-y-auto transform duration-1000 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        {/* Drawer content */}
        <div className='flex justify-center pt-8'>
      <div className='flex items-center justify-center cursor-pointer'>
            <Image src={logo} alt='logo' className='w-[45px] lg:w-[55px]' />
            <h4 className='text-[30px] lg:text-[40px]'> <span className={smooch_sans.className}>Makeup Mania</span> </h4>
        </div>
       </div>
       <p className='m-5 text-cenetr text-[13px]'>We take a bottom-line approach to each project. Our clients consistently see increased traffic, enhanced brand loyalty and new leads thanks to our work.</p>
       <div className=''>
        <div className='flex gap-5 items-center mx-5 mt-5'>
<div className='text-[50px] text-red-400'>
<HiPhone/>
</div>
<div className={cinzel.className}>
<div className='text-start text-xl'>
  <h1>Call Us</h1>
  <p>001292384834</p>
</div>
</div>
        </div>
        <div className='flex gap-5 items-center mx-5 mt-5'>
<div className='text-[50px] text-red-400'>
<MdEmail/>
</div>
<div className={cinzel.className}>
<div className='text-start text-xl'>
  <h1>Write US</h1>
  <p>makeupmania@gmail.com</p>
</div>
</div>
        </div>
        <div className='flex gap-5 items-center mx-5 mt-5'>
<div className='text-[50px] text-red-400'>
<FaAddressBook/>
</div>
<div className={cinzel.className}>
<div className='text-start text-xl'>
  <h1>Address</h1>
  <p>Dhaka, Bangladesh</p>
</div>
</div>
        </div>
       </div>
       <div className='flex justify-center items-center mt-12 text-[30px] gap-5 text-red-500 '>
       <div className='hover:text-red-900 cursor-pointer'>
       <FaFacebook/>
       </div>
       <div className='hover:text-red-900 cursor-pointer'>
        <RiWhatsappFill/>
        </div>
      <div className='hover:text-red-900 cursor-pointer'>
       <FaLinkedin/>
       </div>
       <div className='hover:text-red-900 cursor-pointer'>
        <FaTwitter/>
        </div>
       </div>
      </div>
    </div>
  );
}
