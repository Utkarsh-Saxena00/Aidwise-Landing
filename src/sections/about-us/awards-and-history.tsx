import React from 'react'
import Image from 'next/image'

const AwardsAndHistorySection = () => {
    return (
        <div className='flex justify-between items-center gap-x-[60px] px-[60px] py-[80px] w-full'>
            <div className='w-1/2 flex flex-col bg-[#0A0A0A] px-[60px] py-10'>
                <h1 className='text-base font-semibold text-[#C0C0C0]'>AWARD WINNING</h1>
                <p className='font-medium text-[28px] w-[60%] py-5'>A Leader in Applied Analytics and
                    Data Science solutions</p>
                <p className='font-normal text-lg w-[58%] text-[#FFFFFF]/[0.7]'>Aidwise is helping our customers build for tomorrow.
                    It all starts with a strong culture today and a clear vision for the future.</p>
                <div className='flex items-center gap-x-7 py-6'>
                    <Image src={'/about-us/awards-img.svg'} alt='Awards Img' width={168} height={141} />
                    <Image src={'/about-us/awards-img.svg'} alt='Awards Img' width={168} height={141} />
                    <Image src={'/about-us/awards-img.svg'} alt='Awards Img' width={168} height={141} />
                </div>
            </div>
            <div className='w-1/2 flex flex-col bg-[#0A0A0A] px-[60px] py-10'>
                <h1 className='text-base font-semibold text-[#C0C0C0]'>OUR HISTORY</h1>
                <p className='pt-5 text-lg font-medium w-[74%]'>
                    Founded in 2014, Aidwise began as a small team of data enthusiasts with a bold vision: to harness the power of artificial intelligence and data science to transform the way businesses operate. Over the years, we have grown into a leading AI-driven analytics firm, serving industries ranging from healthcare to finance.
                </p>
                <p className='text-lg pt-10 font-medium w-[70%]'>
                    Our journey has been marked by continuous innovation, a commitment to excellence, and a passion for helping our clients unlock new possibilities. Today, with over a decade of expertise and a proven track record, Aidwise stands at the forefront of AI and data science, driving meaningful change and delivering cutting-edge solutions to businesses worldwide.
                </p>
            </div>
        </div>
    )
}

export default AwardsAndHistorySection