import React from 'react'
import flowervous from '../../../assets/images/fuldani.png'
import Image from 'next/image'
import { cinzel, yatra } from '@/font/font'
import model from '../../../assets/banner/model.jpg'

export default function Team() {
    return (
        <div className='pinkf pb-[100px] mx-5 lg:mx-0'>
            <div className=' max-w-screen-lg mx-auto'>
                <div
                    className='flex justify-center flowermove mix-blend-color-burn'

                >
                    <Image src={flowervous} alt='img' />
                </div>
                <p className='text-[13px] mt-[-20px] text-center'>   <span className={cinzel.className}>meet with</span></p>
                <div className='text-[50px] text-center mt-[-20px]'>
                    <h1 className={cinzel.className}>

                        Our <span className='text-red-400'>Team</span>
                    </h1>
                </div>
                <p className='text-center text-[16px] text-gray-500 lg:mx-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-12 gap-5'>
                    <div>
                        <div className='flex justify-center'>
                            <Image src={model} alt='img' className='rounded-xl shadow-2xl hover:shadow-red-300' />
                        </div>
                        <div className=' text-center'>
                            <h1 className='text-[20px]'><span className={yatra.className}>Anika</span></h1>
                            <p>Makeup Artist</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <Image src={model} alt='img' className='rounded-xl shadow-2xl hover:shadow-red-300' />
                        </div>
                        <div className=' text-center'>
                            <h1 className='text-[20px]'><span className={yatra.className}>Anika</span></h1>
                            <p>Hair Spacialist</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <Image src={model} alt='img' className='rounded-xl shadow-2xl hover:shadow-red-300' />
                        </div>
                        <div className=' text-center'>
                            <h1 className='text-[20px]'><span className={yatra.className}>Anika</span></h1>
                            <p>Spa Expert</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
