import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DomainBlueprintSection = () => {
    return (
        <div className='flex justify-between items-center px-[70px] py-[140px] relative'>
            <div className='w-[45%] flex flex-col'>
                <Image src={'/product-suites/domain-blueprint-logo.svg'} alt='Domain Blueprint' width={195} height={40} />
                <div className='flex flex-col py-10'>
                    <h1 className='text-3xl font-bold w-[55%]'>Customized AI Solutions for Your Industry</h1>
                    <p className='text-xl font-normal text-[#FFFFFF]/[0.7] pt-5 w-[90%]'>Domain BluePrint is your gateway to bespoke AI solutions tailored to the unique needs of your industry.</p>
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

export default DomainBlueprintSection