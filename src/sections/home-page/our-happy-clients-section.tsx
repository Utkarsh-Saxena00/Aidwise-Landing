import React from 'react'
import Image from 'next/image'
import { clientTestimonials } from '@/lib/constants'
import { cn } from '@/lib/utils'

const OurHappyClientsSection = () => {
    return (
        <div className='px-[70px] mb-[100px]'>
            <div className='py-[80px] flex flex-col items-center justify-evenly'>
                <h1 className='font-bold text-4xl text-center'>Our Happy Clients</h1>
                <p className='font-normal pt-10 pb-[80px] text-2xl text-center w-[55%] text-[#949494]'>Partner with us to leverage cutting-edge AI solutions that drive success. From startups to established enterprises, we empower innovation and growth at every stage.</p>
                <div className='w-[70%] relative h-[401px]'>
                    <div className="relative z-[-1]">
                        <Image src={'/home-page/our-happy-clients-bg.svg'} alt="section bg img" className="absolute h-[401px]" width={1296} height={401} />
                    </div>
                    <div className='flex h-full items-center justify-evenly'>
                        {clientTestimonials.map((item, idx) => (
                            <div className={cn('w-[24%] h-[75%] flex p-10 flex-col justify-between', idx === 3 && 'pl-4', idx === 2 && 'pl-8')} key={idx}>
                                <Image src={item.logo} width={72} height={72} alt='logo' />
                                <div className='flex flex-col'>
                                    <span className='text-xl font-bold'>{item.name}</span>
                                    <p className='font-normal pt-2 text-base text-[#949494]'>{item.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHappyClientsSection