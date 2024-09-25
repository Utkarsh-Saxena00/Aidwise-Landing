import React from 'react'
import Image from 'next/image'

const QuickFactsSection = () => {
    return (
        <div className='flex justify-between px-[60px] w-full'>
            <div className='w-full relative rounded-[10px]'>
                <div className="relative z-[-1]">
                    <Image src={'/about-us/quick-facts-bg.svg'} alt="section bg img" className="absolute h-[426px] right-0" width={1415} height={426} />
                </div>
                <div className='flex flex-col h-full px-[60px] py-10'>
                    <h1 className='text-base font-semibold text-[#C0C0C0]'>QUICK FACTS</h1>
                    <div className='flex items-center justify-between pl-6'>
                        <div className='w-[37%]'>
                            <ul className='list-image-[url(/list-star.svg)] flex flex-col gap-y-5'>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                            </ul>
                        </div>
                        <div className='w-[37%]'>
                        <ul className='list-image-[url(/list-star.svg)] flex flex-col gap-y-5'>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                                <li className='p-4 text-lg font-medium'>Improve your revenue team’s productivity with data quality and activity auto capture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickFactsSection