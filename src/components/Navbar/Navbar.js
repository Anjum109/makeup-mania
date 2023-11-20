import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo/logo.PNG'
import Image from 'next/image'
import { smooch_sans} from '@/font/font'

export default function Navbar() {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const isTop = scrollPosition < 50;
        setIsScrolled(!isTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`px-12 py-5 bg-[#f3efef] ${isScrolled ? 'fixed top-0 w-full z-50 border-b-2' : ''}`}>
      <div className='flex justify-between items-center'>
      <div className='flex items-center'>
            <Image src={logo} alt='logo' className='w-[55px]' />
            <h4 className='text-[40px]'> <span className={smooch_sans.className}>Makeup Mania</span> </h4>
        </div>
        <div  className={smooch_sans.className}>
          <div className='flex gap-12 text-[25px] '>
          <button className='hover:font-semibold'> Home </button>
          <button className='hover:font-semibold'>About</button>
          <button className='nav-button hover:font-semibold'>
         Services+
            <div className='hover-content text-start'>
              <div className='px-5 border-b-2'> <span>Services 1</span> </div>
              <div className='px-5 border-b-2'>Services 2</div>
              <div className='px-5 border-b-2'>Services 3</div>
              
            </div>
          </button>
           
          <button className='nav-button'>
         <span className='hover:font-semibold'>Shop</span>
          </button>
            <button className='hover:font-semibold'> <span className='hover:font-semibold'>Blog</span> </button>
            <button className='nav-button hover:font-semibold'>
          Pages+
            <div className='hover-content text-start'>
              <div className='px-5 border-b-2'>Appointment Grid</div>
              <div className='px-5 border-b-2'>Appointment List</div>
              <div className='px-5 border-b-2'>Package Offer</div>
              <div className='px-5 border-b-2'>Testimonial Page</div>
              <div className='px-5 border-b-2'>FAQ</div>
              <div className='px-5 border-b-2'>Gallary Page</div>
              <div className='px-5 border-b-2'>Team Page</div>
              
            </div>
          </button>
            <button className='hover:font-semibold'>Contact</button>
            </div>  
        </div>
        <div>
          <button className='bg-white rounded-full w-[40px] h-[40px] flex justify-center flex-col items-center hover:bg-[#f5b1b1] '>
          <div>
          <div className='bg-black w-[15px] h-[3px]'/>
           <div className='flex justify-end'>
           <div className='bg-black w-[10px] h-[3px] mt-1'/>
           </div>
          </div>
          </button>
        </div>
      </div>
    </div>
  )
}
