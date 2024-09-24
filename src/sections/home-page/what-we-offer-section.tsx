import React from 'react'
import Image from 'next/image'
import { offerings } from '@/lib/constants'
import { cn } from '@/lib/utils'

const WhatWeOfferSection = () => {
    return (
        <div className='flex justify-between px-[70px] relative mb-[100px]'>
            <div className='w-full relative h-[855px] border border-[#ffffff]/[.15] rounded-[10px]'>
                <div className="relative z-[-1]">
                    <Image src={'/home-page/what-we-offer-bg.svg'} alt="section bg img" className="absolute h-[855px]" width={2000} height={855} />
                </div>
                <div className='flex flex-col justify-evenly py-[100px] h-full items-center'>
                    <p className='font-bold text-4xl w-1/2 text-center leading-[4rem]'>We Offer AI-Awarded Expertise, Country Level Nominated AI Solutions, Powered Startup Funding, and Innovation at the Core.</p>
                    <p className='font-normal text-2xl w-[55%] text-center text-[#949494]'>Partner with us to leverage cutting-edge AI solutions that drive success. From startups to established enterprises, we empower innovation and growth at every stage.</p>
                    <div className='px-[40px] py-[20px] w-[60%] flex justify-evenly bg-gradient-to-r from-[#FFFFFF]/[0.2] via-[#FFFFFF]/[0.04] to-[#FFFFFF]/[0.2]'>
                        {offerings.map((item, idx) => (
                            <div className={cn('flex items-center', idx !== 3 ? 'justify-between':'justify-center')} key={idx}>
                                <div className={cn('flex flex-col', idx === 3 ? 'w-full': 'w-[90%]')}>
                                    <span className='font-semibold text-xl text-center'>{item.label}</span>
                                    <span className='font-semibold text-xl text-center'>{item.value}</span>
                                </div>
                                {idx !== 3 && (
                                    <div className='px-[60px]'>
                                        <div className='w-[1px] h-10 rounded-[1px] bg-[#B9B9B9]'></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOfferSection