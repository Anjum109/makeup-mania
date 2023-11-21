import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo/logo.png'
import Image from 'next/image'
import { smooch_sans} from '@/font/font'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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
    // for small screen 
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
    <div className={`px-5 lg:px-12 py-3  bg-[#f3efef] ${isScrolled ? 'fixed top-0 w-full z-50 border-b-2' : ''}`}>
      <div className='flex justify-between items-center'>
      <div className='flex items-center'>
            <Image src={logo} alt='logo' className='w-[45px] lg:w-[55px]' />
            <h4 className='text-[30px] lg:text-[40px]'> <span className={smooch_sans.className}>Makeup Mania</span> </h4>
        </div>
        {/* large screen navbar buttons start  */}
        <div className='hidden lg:block'>
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
        </div>
         {/* large screen navbar buttons end  */}
        {/* large screen menu bar  */}
         <div className='hidden lg:block'>
          <button className='bg-white rounded-full w-[40px] h-[40px] flex justify-center flex-col items-center hover:bg-[#f5b1b1] '>
          <div>
          <div className='bg-black w-[15px] h-[3px]'/>
           <div className='flex justify-end'>
           <div className='bg-black w-[10px] h-[3px] mt-1'/>
           </div>
          </div>
          </button>
        </div>
           {/* large screen menu bar  */}
        {/* small screen menu bar  */}
        <div className='lg:hidden flex items-center'>
                        {isDrawerOpen ? (
                            <button onClick={handleDrawerToggle} >
                                <ImCross size={25} />
                            </button>
                        ) : (
                            <button onClick={handleDrawerToggle} >
                                <GiHamburgerMenu size={30} />
                            </button>
                        )}
                    </div>
        <div className={`fixed top-20 left-0 w-full text-center  bg-red-100 h-full overflow-y-auto transform  duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`} >
                        {/* Drawer content */}
                        <ul className='flex flex-col text-pink-700 font-bold text-[18px]'>
                       
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                                
                                    <button>HOME</button>
                                
                            </li>
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                                
                                    <button>ABOUT</button>
                                
                            </li>
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                                
                                    <button>Services+</button>
                                
                            </li>
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                                
                                    <button>Shop</button>
                                
                            </li>
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                           
                                    <button>Blog</button>
                                
                            </li>
                          
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                               
                                    <button>Pages+</button>
                                
                            </li>
                            <li className='hover:bg-pink-900 hover:text-pink-100 p-[9px]'>
                               
                                    <button>Contact+</button>
                                
                            </li>
                        </ul>
                    </div>
           {/* small screen menu bar  */}
      </div>
    </div>
  )
}
