import React from 'react'
import Image from 'next/image'

const AIMaturitySection = () => {
    return (
        <div className='flex justify-center relative my-[60px] w-full'>
            <div className='w-full relative mt-[50px]'>
                <div className="relative z-[-1] w-[83%]">
                    <Image src={'/ai-consulting/shooting-stars.svg'} alt="section bg img" className="absolute w-full left-[10.25rem]" width={1247} height={89} />
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[34px] leading-[50px] pt-3 w-[32%] text-center text-[#CCCCCC]'>
                        Come, Accelerate Your AI Maturity and Drive Innovation
                    </h1>
                    <p className='pt-[26px] text-base font-medium text-center text-[#FFFFFF]/[0.7] w-[30%]'>
                        Automate, innovate, and scale with AI solutions tailored to your business needs. Boost your organization’s AI maturity to unlock transformative growth.
                    </p>
                    <div className='pt-[100px] flex overflow-x-hidden'>
                        <Image src={'/ai-consulting/info-img.svg'} alt='Info' className='w-full relative left-[-7.25rem]' width={896} height={821} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIMaturitySection