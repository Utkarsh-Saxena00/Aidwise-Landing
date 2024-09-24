import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full relative h-[600px] mb-[140px]'>
            <div className='relative z-[-1]'>
                <Image src={'product-suites/hero-section-bg.svg'} alt='hero bg' width={2025} height={600} className='absolute min-w-[130vw] left-[-14rem] top-[-14rem]' />
            </div>
            <div className='flex items-center justify-between px-[70px] py-[100px]'>
                <div className='w-[45%] flex flex-col'>
                    <Image src={'/product-suites/zero-shot-learning-logo.svg'} alt='Zero Shot Learning' width={210} height={40} />
                    <div className='flex flex-col py-10'>
                        <h1 className='text-3xl font-bold w-[65%]'>Transforming Predictions with Minimal Data</h1>
                        <p className='text-xl font-normal text-[#FFFFFF]/[0.7] pt-5 w-[89%]'>Leverage the power of Zero Shot Learning to make accurate predictions without extensive datasets. Perfect for industries where labeled data is scarce.</p>
                    </div>
                    <Link href={'/product-suites/zero-shot-learning'}>
                        <Image src={'/product-suites/know-more.svg'} alt='Know More' width={164} height={40} />
                    </Link>
                </div>
                <div className='w-[45%]'>
                    <Image src={'/product-suites/gif-img.svg'} alt='Img' width={600} height={336} className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection