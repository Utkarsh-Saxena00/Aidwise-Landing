import React from 'react'
import Image from 'next/image'

const OurTeamSection = () => {
    return (
        <div className='flex justify-between px-[60px] py-[220px] w-full'>
            <div className='w-full relative rounded-[10px] h-[565px]'>
                <div className="relative z-[-1]">
                    <Image src={'/about-us/our-team-bg.svg'} alt="section bg img" className="absolute w-full" width={1415} height={565} />
                </div>
                <div className='flex flex-col h-full items-center justify-evenly'>
                    <h1 className='font-semibold text-base text-[#C0C0C0]'>MEET OUR TEAM</h1>
                    <div className='py-10 flex items-center gap-x-[100px]'>
                        <div className='flex flex-col'>
                            <Image src={'/about-us/ceo-img.svg'} alt='CEO Image' width={180} height={180} />
                            <div className='pt-5 flex flex-col items-center'>
                                <span className='text-base font-medium'>Swadeep Singh</span>
                                <span className='text-base font-normal'>CEO</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <Image src={'/about-us/team-member-img.svg'} alt='ADVISOR Image' width={180} height={180} />
                            <div className='pt-5 flex flex-col items-center'>
                                <span className='text-base font-medium'>Abhay Shukla</span>
                                <span className='text-base font-normal'>ADVISOR</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <Image src={'/about-us/team-member-img.svg'} alt='INNOVATION Image' width={180} height={180} />
                            <div className='pt-5 flex flex-col items-center'>
                                <span className='text-base font-medium'>Rajat Shah</span>
                                <span className='text-base font-normal'>INNOVATION</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <Image src={'/about-us/team-member-img.svg'} alt='COO Image' width={180} height={180} />
                            <div className='pt-5 flex flex-col items-center'>
                                <span className='text-base font-medium'>ATUL GUPTA</span>
                                <span className='text-base font-normal'>COO</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative border-2 border-[#282729] h-[80px] w-[60%] left-[24rem] bottom-10 bg-black rounded-[10px]'>
                    <Image src={'/orange-star.svg'} alt='orange star' className='absolute left-[-3.25rem] top-[-0.75rem]' width={100} height={28} />
                    <Image src={'/orange-star.svg'} alt='orange star' className='absolute right-[-3.25rem] top-[-0.75rem]' width={100} height={28} />
                    <div className='flex gap-x-[68px] px-[68px] items-center h-full'>
                        <span className='font-semibold text-base text-center'>40 UNDER 40
                            DATA SCIENTIST</span>
                        <div className='w-[2px] h-[30px] rounded-[1px] bg-[#4D4D4D]'></div>
                        <span className='font-semibold text-base text-center'>HEALTH INDUSTRY LEADERS</span>
                        <div className='w-[2px] h-[30px] rounded-[1px] bg-[#4D4D4D]'></div>
                        <span className='font-semibold text-base text-center'>8+ PATENTS APPLIED</span>
                        <div className='w-[2px] h-[30px] rounded-[1px] bg-[#4D4D4D]'></div>
                        <span className='font-semibold text-base text-center'>AZURE CERTIFICATION</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeamSection