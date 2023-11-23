import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo/logo.png'
import Image from 'next/image'
import { smooch_sans} from '@/font/font'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import LargeScreenDrawer from './LargeScreenDrawer';

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
    <div
    className={`px-5 lg:px-12 py-3 bg-[#f3efef] ${
      isScrolled ? 'top-0 w-full z-50 border-b-2 sticky transition-all duration-1000' : ''
    }`}
  >
      <div className='flex justify-between items-center'>
      <Link href='/'>
      <div className='flex items-center cursor-pointer'>
            <Image src={logo} alt='logo' className='w-[45px] lg:w-[55px]' />
            <h4 className='text-[30px] lg:text-[40px]'> <span className={smooch_sans.className}>Makeup Mania</span> </h4>
        </div></Link>
        {/* large screen navbar buttons start  */}
        <div className='hidden lg:block'>
        <div  className={smooch_sans.className}>
          <div className='flex gap-12 text-[25px] '>
          <button className='hover:font-semibold transition-all duration-1000'> Home </button>
          <button className='hover:font-semibold transition-all duration-1000'>About</button>
          <button className='nav-button hover:font-semibold transition-all duration-1000'>
         Services+
            <div className='hover-content text-start'>
              <div className='px-5 border-b-2'> <span>Services 1</span> </div>
              <div className='px-5 border-b-2'>Services 2</div>
              <div className='px-5 border-b-2'>Services 3</div>
              
            </div>
          </button>
           
          <button className='nav-button'>
         <span className='hover:font-semibold transition-all duration-1000'>Shop</span>
          </button>
            <button className='hover:font-semibold transition-all duration-1000'> <span className='hover:font-semibold transition-all duration-1000'>Blog</span> </button>
            <button className='nav-button hover:font-semibold transition-all duration-1000'>
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
            <button className='hover:font-semibold transition-all duration-1000'>Contact</button>
            </div>  
        </div>
        </div>
         {/* large screen navbar buttons end  */}
        {/* large screen menu bar  */}
       
                {/* small screen menu bar */}
                <div className='lg:block hidden'>
                    <LargeScreenDrawer />
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
        <div className={`fixed top-20 left-0 w-full text-center  bg-red-100 h-full overflow-y-auto transform  duration-1000 ease-in-out ${isDrawerOpen ? 'translate-x-0 ' : '-translate-x-full'} lg:hidden`} >
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
