import { cinzel, kanit, pacifico } from '@/font/font'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import flowervous from '../../assets/images/fuldani.png'
import { TbClockHour3 } from "react-icons/tb";

import Image from 'next/image'

export default function MakeAppointment() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const subjects = ['Makeup', 'Aroma therapy', 'Body Massage', 'Face facial', 'Massage therapy', 'Sauna relax', 'Geothermal spa', 'Backbone Therapy'];

    const handleSelectSubject = (subject) => {
        setSelectedSubject(subject);
        setDropdownOpen(false);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    return (
        <div className='bg-[#f3efef] py-20'>
            {/* head  */}
            <div className='flex justify-center flowermove mix-blend-color-burn'>
                <Image src={flowervous} alt='img' />
            </div>
            <div className='text-[50px] text-center mt-[-30px]'>
                <h1 className={cinzel.className}>
                    Make <span className='text-red-400'>Appointment</span>
                </h1>
            </div>
            {/* content  */}
            <div className='appoint-bg max-w-screen-xl mx-auto mt-12 mb-[200px] flex'>
                <div className='flex w-full'>
                    {/* 1  */}
                    <div className='w-full lg:w-[60%] bg-white lg:mx-[30px] mt-[70px] mb-[20px] lg:p-3'>
                        <div className=' bg-gray-100 w-full h-full lg:p-[30px]'>
                            <div>
                                <h1 className='text-[40px] text-red-400 mt-6'> <span className={pacifico.className}>Make Your Appointment</span> </h1>
                                <p className='text-[14px] text-gray-500 me-6 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <form className='my-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <input type='text' placeholder='Name' className='bg-gray-200 outline-none w-full px-4 py-5' required />
                                    <input type='email' required placeholder='Email' className='bg-gray-200 outline-none w-full px-4 py-5' />
                                    <input type='number' required placeholder='Phone Number' className='bg-gray-200 outline-none w-full px-4 py-5' />

                                    {/* Dropdown content */}
                                    <div className='relative'>
                                        <div
                                            className='w-full flex justify-between items-center bg-gray-200 h-full px-5 font-bold text-gray-600 cursor-pointer'
                                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                                        >
                                            <h1>{selectedSubject || 'Select'}</h1>
                                            {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {/* Dropdown content */}
                                        {isDropdownOpen && (
                                            <div className='absolute top-full left-0 w-full z-100 text-center bg-gray-200 mt-1 dropdown-content open text-[12px]'>
                                                {subjects.map((subject, index) => (
                                                    <div
                                                        key={index}
                                                        className='cursor-pointer border-b-2 border-gray-300 py-2'
                                                        onClick={() => handleSelectSubject(subject)}
                                                    >
                                                        {subject}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* date & time  */}
                                    <input type='date' required placeholder='Select Date' className='bg-gray-200 outline-none w-full px-4 py-5 ' onChange={handleDateChange} />
                                    <input type='time' required placeholder='Select Time' className='bg-gray-200 outline-none w-full px-4 py-5' onChange={handleTimeChange} />
                                </div>
                                <textarea type='text' placeholder='Your Message' className='bg-gray-200 outline-none w-full px-4 py-5 h-[150px] mt-5' />
                                <div className='flex justify-center mt-5 cursor-pointer '>  <button className='text-red-50 bg-red-400 rounded-full px-20 font-bold py-3 hover:px-24 hover:py-4 text-[20px] transition-all duration-1000 '>Submit</button></div>
                            </form>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='hidden lg:block w-[50%] py-[100px] px-[30px] '>
                        <div className='bg-[#ffffff64] p-5 flex justify-center'>
                            <div> <div className='flex items-center text-[30px] gap-4'>
                                <div className='bg-red-400 w-[50px] h-[50px] flex justify-center rounded-full items-center'>
                                    <TbClockHour3 />
                                </div>
                                <p><span className={kanit.className}>Hours:</span></p>
                            </div>
                                <p className=' text-[15px] px-5 py-5 font-bold'>
                                    Mon to Fri: 7:30 am — 1:00 am <br></br>
                                    Sat: 9:00 am — 1:00 am <br></br>
                                    Sun: 9:00 am — 11:30 pm
                                </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
