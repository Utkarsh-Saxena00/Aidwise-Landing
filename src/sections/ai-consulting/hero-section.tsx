import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full relative h-[646px] overflow-y-hidden mb-[60px]'>
            <div className="relative z-[-1]">
                <Image src={'/ai-consulting/hero-bg.svg'} alt='Hero Section BG' className='absolute w-full top-[-30rem]' width={1535} height={646} />
            </div>
            <div className='flex flex-col items-center py-[60px]'>
                <h1 className=' p-2 text-5xl leading-[60px] text-center w-[47%] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#575757] text-transparent bg-clip-text'>
                    Empowering Your Business with Strategic AI Solutions
                </h1>
                <p className='text-xl font-medium w-1/3 text-center pt-7'>
                We help you unlock the potential of AI with tailored strategies that drive innovation and deliver measurable business outcomes.
                </p>
                <div className='w-[70%] pt-[60px]'>
                    <Image src={'/ai-consulting/hero-gif.svg'} alt='Hero Gif' className='w-full' width={1100} height={260} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection