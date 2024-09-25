import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='w-full relative h-[646px] overflow-y-hidden mb-[60px]'>
            <div className="relative z-[-1]">
                <Image src={'/ai-consulting/hero-bg.svg'} alt='Hero Section BG' className='absolute w-full top-[-30rem]' width={1535} height={646} />
            </div>
            <div className='flex flex-col items-center py-[60px]'>
                <h1 className=' p-2 text-5xl leading-[60px] text-center w-[34%] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#575757] text-transparent bg-clip-text'>
                    Get Custom AI Solutions That Set You Apart
                </h1>
                <p className='text-xl font-medium w-[38%] text-center pt-7'>
                    Leverage AI in unique ways to differentiate your business from competitors, unlocking new capabilities and delivering personalized experiences.
                </p>
                <div className='w-[70%] pt-[60px]'>
                    <Image src={'/ai-consulting/hero-gif.svg'} alt='Hero Gif' className='w-full' width={1100} height={260} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection