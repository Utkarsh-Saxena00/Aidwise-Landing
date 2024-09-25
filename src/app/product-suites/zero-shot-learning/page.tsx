import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center'>
            <Image className='pt-[60px]' src={'/product-suites/zero-shot-learning-logo.svg'} alt='Zero Shot Learning' width={283} height={50} />
            <p className='text-3xl font-bold py-10 w-[38%] text-center'>
                Transforming Business Predictions with Minimal Data for Maximum Impact
            </p>
            <Image src={'/product-suites/gif-img.svg'} alt='GIF Img' width={1016} height={500} />
            <div className='flex justify-start pt-[80px] w-1/2'>
                <div className='border border-[#242424] p-4 flex items-center gap-x-5 w-[65%] rounded-2xl'>
                    <Image src={'/product-suites/zero-shot-page-img.svg'} alt='Image' width={176} height={86} />
                    <p className='font-semibold text-lg'>
                        Improve your revenue team’s productivity with data quality and activity auto capture
                    </p>
                </div>
            </div>
            <div className='flex justify-end py-[80px] w-1/2'>
                <div className='border border-[#242424] p-4 flex items-center gap-x-5 w-[65%] rounded-2xl'>
                    <Image src={'/product-suites/zero-shot-page-img.svg'} alt='Image' width={176} height={86} />
                    <p className='font-semibold text-lg'>
                        Improve your revenue team’s productivity with data quality and activity auto capture
                    </p>
                </div>
            </div>
            <div className='flex justify-start pb-[80px] w-1/2'>
                <div className='border border-[#242424] p-4 flex items-center gap-x-5 w-[65%] rounded-2xl'>
                    <Image src={'/product-suites/zero-shot-page-img.svg'} alt='Image' width={176} height={86} />
                    <p className='font-semibold text-lg'>
                        Improve your revenue team’s productivity with data quality and activity auto capture
                    </p>
                </div>
            </div>
            <div className='flex justify-end pb-[180px] w-1/2'>
                <div className='border border-[#242424] p-4 flex items-center gap-x-5 w-[65%] rounded-2xl'>
                    <Image src={'/product-suites/zero-shot-page-img.svg'} alt='Image' width={176} height={86} />
                    <p className='font-semibold text-lg'>
                        Improve your revenue team’s productivity with data quality and activity auto capture
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page