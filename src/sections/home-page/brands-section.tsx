"use client"
import Image from 'next/image'
import React from 'react'

const BrandSection = () => {
    return (
        <div className='flex items-center relative top-[200px] justify-between px-[70px] py-[100px] gap-y-2'>
            <p className='text-2xl font-medium'>Trusted by Top Innovative Organizations</p>
            <div className='flex w-1/2 justify-between'>
                <div className='flex items-center'>
                    <Image src={'/home-page/brand-logo.svg'} className='pr-2' alt='brand logo' width={30} height={30} />
                    <p className='text-base font-bold'>BRAND NAME</p>
                </div>
                <div className='flex items-center'>
                    <Image src={'/home-page/brand-logo.svg'} className='pr-2' alt='brand logo' width={30} height={30} />
                    <p className='text-base font-bold'>BRAND NAME</p>
                </div>
                <div className='flex items-center'>
                    <Image src={'/home-page/brand-logo.svg'} className='pr-2' alt='brand logo' width={30} height={30} />
                    <p className='text-base font-bold'>BRAND NAME</p>
                </div>
                <div className='flex items-center'>
                    <Image src={'/home-page/brand-logo.svg'} className='pr-2' alt='brand logo' width={30} height={30} />
                    <p className='text-base font-bold'>BRAND NAME</p>
                </div>
            </div>
        </div>
    )
}

export default BrandSection