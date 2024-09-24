import React from 'react'
import Image from 'next/image'

const WhatWeDoSection = () => {
    return (
        <div className='flex justify-between px-[70px] py-[100px] relative top-[100px] mb-[100px]'>
            <div className="w-full relative h-[422px] border border-[#ffffff]/[.15] rounded-[10px]">
                <div className="relative z-[-1]">
                    <Image src={'/home-page/what-we-do-bg.svg'} alt="section bg img" className="absolute h-[422px] right-0" width={1415} height={422} />
                </div>
                <div className='flex items-center justify-between h-[422px]'>
                    <div className="w-[54%] h-fit px-[60px]">
                        <p className="text-4xl block w-[75%] font-bold">What We Do?</p>
                        <span className="text-xl text-[#dfdfdf] tracking-wider font-medium block w-[81%] pt-6">We are problem solvers, transforming business challenges into solutions by leveraging Data, Analytics, and AI to deliver powerful products and services.</span>
                    </div>
                    <Image src={'/home-page/hero-gif.svg'} alt="hero gif" width={770} height={422} className="h-[422px] w-[35%] p-[60px]" />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoSection