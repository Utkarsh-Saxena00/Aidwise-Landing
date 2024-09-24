import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CopilotsSection = () => {
    return (
        <div className='flex justify-between items-center px-[70px] py-[140px] mb-12 relative'>
            <div className='w-[45%]'>
                <Image src={'/product-suites/gif-img.svg'} alt='Img' width={600} height={336} className='w-full' />
            </div>
            <div className='w-[45%] flex flex-col'>
                <Image src={'/product-suites/copilots-logo.svg'} alt='Co-Pilots Crafted For You' width={269} height={40} />
                <div className='flex flex-col py-10'>
                    <h1 className='text-3xl font-bold w-[65%]'>Tailored AI Assistants for Your Business</h1>
                    <p className='text-xl font-normal text-[#FFFFFF]/[0.7] pt-5 w-[89%]'>Our Co-Pilots are AI assistants designed to support your specific business needs, enhancing productivity and efficiency.</p>
                </div>
                <Link href={'/product-suites/zero-shot-learning'}>
                    <Image src={'/product-suites/know-more.svg'} alt='Know More' width={164} height={40} />
                </Link>
            </div>
        </div>
    )
}

export default CopilotsSection