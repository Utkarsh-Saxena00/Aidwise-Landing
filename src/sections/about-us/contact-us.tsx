import React from 'react'
import Image from 'next/image'

const ContactUsSection = () => {
    return (
        <div className='flex px-[60px] py-[80px] w-full'>
            <div className='bg-gradient-to-r from-[#111111]/[0.7] via-[#515151] to-[#111111]/[0.7] w-full'>
                <div className='m-[60px] relative rounded-[10px] bg-gradient-to-r from-[#000000] to-[#1A1A1A] overflow-hidden'>
                    <div className="relative">
                        <Image src={'/about-us/contact-us-bg.svg'} alt="section bg img" className="absolute right-[-3rem] top-6" width={250} height={250} />
                    </div>
                    <div className='px-[95px] py-[80px] flex items-center justify-between'>
                        <p className='uppercase text-3xl w-[30%] font-bold leading-[50px]'>see why aidwise is recognized as a leader in AI-driven businesses</p>
                        <Image src={'/about-us/contact-us-btn.svg'} alt='contact-us btn' width={270} height={44} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection