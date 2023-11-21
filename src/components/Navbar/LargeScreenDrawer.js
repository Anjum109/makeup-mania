import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

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
      <div
        className={`fixed top-[12%] right-0 w-[400px] h-full text-center bg-red-100 overflow-y-auto transform duration-1000 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        {/* Drawer content */}
        <ul className='flex flex-col text-pink-700 font-bold text-[18px]'>
         
          
        </ul>
      </div>
    </div>
  );
}
