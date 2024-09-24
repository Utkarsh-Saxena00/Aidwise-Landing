import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full relative h-[878px] overflow-y-hidden'>
            <div className="relative z-[-1]">
                <Image className='absolute w-full' src={'/contact-us/contact-us-bg.svg'} alt='Background Image' width={1535} height={666} />
            </div>
            <div className='flex px-[60px] items-center justify-evenly h-full'>
                <div className='w-[45%] flex flex-col'>
                    <h1 className='text-5xl font-bold leading-[70px] w-[64%]'>
                        Everything you need to
                        Run revenue
                    </h1>
                    <p className='pt-7 text-xl font-medium text-[#FFFFFF]/[0.7] w-[62%]'>
                        Consolidate, simplify, and accelerate with Aidwise.
                        Just click submit to see it in action.
                    </p>
                </div>
                <div className='w-[45%] bg-[#0F0E10] flex flex-col rounded-[6px]'>
                    <div className='flex justify-between items-center'>
                        <Image className='pl-[52px] py-[49px] w-[40%]' src={'/contact-us/request-demo.svg'} alt='Request Demo' width={263} height={62} />
                        <Image src={'/contact-us/form-img.svg'} alt='Form Image' width={158} height={136} />
                    </div>
                    <div className='border-t-4 border-black flex p-11 flex-col'>
                        <span className='text-base font-medium pb-4'>Business or Personal Email</span>
                        <form>
                            <div className='flex items-center gap-x-5'>
                                <Input className='font-normal h-11' required placeholder='Enter your email' />
                                <Button type='submit' className='rounded px-4 py-[10px]'>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page