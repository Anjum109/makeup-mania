import React from 'react'

export default function ServicesTopic() {
    return (
        <div className=' max-w-screen-xl mx-auto my-[150px]'>
            <div className='grid grid-cols-2 h-[500px] gap-5'>
                <div className='service-one-bg '>
                    <div className='w-full h-full flex flex-col justify-center items-center hover:bg-red-200'>
                        <h1 className='text-[40px] font-bold text-white'>Winter Ritual</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='bg-red-500'></div>
                    <div className='bg-red-500'></div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 h-[250px] mt-5'>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
            </div>
        </div>
    )
}
