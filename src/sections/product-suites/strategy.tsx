import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const StrategySection = () => {
    return (
        <div className='flex justify-between items-center px-[70px] py-[140px] relative'>
            <div className='w-[45%] flex flex-col'>
                <Image src={'/product-suites/strategy-logo.svg'} alt='Strategy' width={118} height={40} />
                <div className='flex flex-col py-10'>
                    <h1 className='text-3xl font-bold w-[55%]'>Strategic AI Consulting to Transform Your Business</h1>
                    <p className='text-xl font-normal text-[#FFFFFF]/[0.7] pt-5 w-[75%]'>Partner with our experts to develop and implement a robust AI strategy that aligns with your business goals.</p>
                </div>
                <Link href={'/product-suites/zero-shot-learning'}>
                    <Image src={'/product-suites/know-more.svg'} alt='Know More' width={164} height={40} />
                </Link>
            </div>
            <div className='w-[45%]'>
                <Image src={'/product-suites/gif-img.svg'} alt='Img' width={600} height={336} className='w-full' />
            </div>
        </div>
    )
}

export default StrategySection