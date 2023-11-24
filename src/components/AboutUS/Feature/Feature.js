import { bebas, cinzel, kanit, yatra } from '@/font/font'
import React from 'react'
import flowervous from '../../../assets/images/fuldani.png'
import Image from 'next/image'
import spakit from '../../../assets/banner/spakit.png'
import { IoAmericanFootballOutline } from "react-icons/io5";
import { SiTurkishairlines } from "react-icons/si";


export default function Feauture() {

    return (
        <div className='pinkf pb-[100px]'>
            <div className='py-20 max-w-screen-lg mx-auto'>
                <div
                    className='flex justify-center flowermove mix-blend-color-burn'

                >
                    <Image src={flowervous} alt='img' />
                </div>
                <div className='text-[50px] text-center mt-[-30px]'>
                    <h1 className={cinzel.className}>
                        Our <span className='text-red-400'>Feature</span>
                    </h1>
                </div>
                <p className='text-center text-[16px] text-gray-500 lg:mx-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

            </div>
            {/* background image animation  */}
            <div className='flowerstoneservice mt-[-180px]' />
            <div className=' mt-[200px] grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                <div>
                    <Image src={spakit} alt='img' />
                </div>
                <div className='flex flex-col gap-5 mx-5 lg:mx-0'>
                    <div className='flex gap-5 items-center lg:ms-[-100px]'>
                        <div className='text-[50px] text-red-400 bg-gray-200 p-5'
                            style={{ borderTopLeftRadius: '20%', borderTopRightRadius: '50%', borderBottomLeftRadius: '30%', borderBottomRightRadius: '30%' }}
                        > <IoAmericanFootballOutline /></div>
                        <div>
                            <h1 className='my-2 text-[30px]'><span className={yatra.className}>Matt Effects</span></h1>
                            <p className='text-[14px] mr-20'>Vivamus nec ligula et leo sodales pellentesque id sed lectus. <br></br> Aliquam viverra velit sagittis pharetra venenatis

                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center lg:ms-[-50px]'>
                        <div className='text-[50px] text-red-400 bg-gray-200 p-5'
                            style={{ borderTopLeftRadius: '20%', borderTopRightRadius: '50%', borderBottomLeftRadius: '30%', borderBottomRightRadius: '30%' }}
                        > <IoAmericanFootballOutline /></div>
                        <div>
                            <h1 className='my-2 text-[30px]'><span className={yatra.className}>Relax Zones</span></h1>
                            <p className='text-[14px] mr-20'>Vivamus nec ligula et leo sodales pellentesque id sed lectus. <br></br> Aliquam viverra velit sagittis pharetra venenatis

                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='text-[50px] text-red-400 bg-gray-200 p-5'
                            style={{ borderTopLeftRadius: '20%', borderTopRightRadius: '50%', borderBottomLeftRadius: '30%', borderBottomRightRadius: '30%' }}
                        > <SiTurkishairlines /></div>
                        <div>
                            <h1 className='my-2 text-[30px]'><span className={yatra.className}>Hair Diration</span></h1>
                            <p className='text-[14px] mr-20'>Vivamus nec ligula et leo sodales pellentesque id sed lectus. <br></br> Aliquam viverra velit sagittis pharetra venenatis

                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center lg:ms-[-50px]'>
                        <div className='text-[50px] text-red-400 bg-gray-200 p-5'
                            style={{ borderTopLeftRadius: '20%', borderTopRightRadius: '50%', borderBottomLeftRadius: '30%', borderBottomRightRadius: '30%' }}
                        > <IoAmericanFootballOutline /></div>
                        <div>
                            <h1 className='my-2 text-[30px]'><span className={yatra.className}>Makeup</span></h1>
                            <p className='text-[14px] mr-20'>Vivamus nec ligula et leo sodales pellentesque id sed lectus. <br></br> Aliquam viverra velit sagittis pharetra venenatis

                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center lg:ms-[-100px]'>
                        <div className='text-[50px] text-red-400 bg-gray-200 p-5'
                            style={{ borderTopLeftRadius: '20%', borderTopRightRadius: '50%', borderBottomLeftRadius: '30%', borderBottomRightRadius: '30%' }}
                        > <IoAmericanFootballOutline /></div>
                        <div>
                            <h1 className='my-2 text-[30px]'><span className={yatra.className}>Spa</span></h1>
                            <p className='text-[14px] mr-20'>Vivamus nec ligula et leo sodales pellentesque id sed lectus. <br></br> Aliquam viverra velit sagittis pharetra venenatis

                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
