import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='flex justify-between p-[60px]'>
            <div className='w-full relative h-[420px] rounded-[10px]'>
                <div className="relative z-[-1]">
                    <Image src={'/about-us/hero-bg.svg'} alt="section bg img" className="absolute w-full" width={1415} height={310} />
                </div>
                <div className='flex items-center px-[60px] justify-between h-full'>
                    <div className="w-[60%] h-fit">
                        <p className="text-4xl block w-[75%] font-bold">Who We Are And</p>
                        <p className="text-4xl block font-bold">How We’re Revolutionizing AI Innovation?</p>
                        <span className="text-xl text-[#dfdfdf] tracking-wider font-medium block pt-6">At Aidwise, production means the continuous innovation, development, and strategic path to unlocking the full potential of AI-driven solutions. With over a decade of expertise in AI and data science, we are committed to helping businesses achieve their goals and drive transformative progress in their industries.</span>
                    </div>
                    <Image src={'/logo.svg'} alt="Aidwise logo" width={300} height={60} className="h-[60px] w-[20%]" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection