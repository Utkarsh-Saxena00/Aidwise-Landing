import React from 'react'
import Image from 'next/image'

const OurMissionSection = () => {
    return (
        <div className='flex justify-between p-[60px] w-full'>
            <div className='w-full relative rounded-[10px]'>
                <div className="relative z-[-1]">
                    <Image src={'/about-us/our-mission-bg.svg'} alt="section bg img" className="absolute h-[374px]" width={1415} height={374} />
                </div>
                <div className='flex items-center justify-between h-full px-[60px] py-10'>
                    <div className='w-[70%] flex flex-col'>
                        <h1 className='text-[#C0C0C0] text-base font-semibold'>OUR MISSION</h1>
                        <p className='py-5 w-[60%] text-[28px] font-medium'>Improve the Safety, Efficiency, and Sustainability of the operations that power the global economy.</p>
                        <p className='text-lg font-normal w-[72%] text-[#FFFFFF]/[0.7]'>We are an Applied Analytics and Data Science solutions and services company that aims to bridge the gap between technological advancements and business value generation, primarily for the healthcare industry. We believe insight-generating analytics can turbocharge a company’s performance beyond its investment and don’t limit our job to just applying analytical rigor to client-supplied data; we actively seek opportunities to implement systems that capture the right data.</p>
                    </div>
                    <Image src={'/about-us/gif-img.svg'} alt='Gif' width={282} height={282} />
                </div>
            </div>
        </div>
    )
}

export default OurMissionSection