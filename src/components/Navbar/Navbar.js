import React from 'react'
import logo from '../../assets/images/logo/logo.PNG'
import Image from 'next/image'

export default function Navbar() {
    
  return (
    <div className='h-[100px] px-12 py-5 bg-[#f3efef]'>
      <div className='flex justify-between'>
      <div className='flex items-center'>
            <Image src={logo} alt='logo' className='w-[50px]' />
            <h4 className='text-xl'>Makeup Mania</h4>
        </div>
        <div>
          <ul className='flex gap-3 text-lg'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
            </ul>  
        </div>
        <div>
          <button className='bg-white rounded-full w-[40px] h-[40px] flex justify-center flex-col items-center hover:bg-[#f5b1b1]'>
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
