import React from 'react'
import Image from 'next/image'

const OurUniqueApproachSection = () => {
    return (
        <div className='flex justify-between px-[70px] relative mb-[100px]'>
            <div className='w-[21%] relative h-[400px] border border-[#ffffff]/[.15] rounded-[10px]'>
                <div className="relative z-[-1]">
                    <Image src={'/home-page/our-unique-approach-bg.svg'} alt="section bg img" className="absolute h-[400px]" width={400} height={400} />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-center'>
                        <Image src={'/home-page/our-unique-approach-logo.svg'} alt="approach logo img" width={250} height={250} />
                    </div>
                    <div className='flex flex-col content-center flex-wrap'>
                        <div className='w-[70%]'>
                            <p className='text-[26px] text-center font-semibold'>Our Unique Approach</p>
                            <span className="text-base text-[#949494] block font-normal text-center pt-[10px]">Empowers you to achieve your goals with AI-driven insights.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[77%] border h-[400px] border-[#ffffff]/[.15] rounded-[10px]'>
                <Image src={'/home-page/hero-gif.svg'} alt="hero gif" width={1450} height={400} className="h-[400px] p-[50px]" />
            </div>
        </div>
    )
}

export default OurUniqueApproachSection