import React from 'react'
import Image from 'next/image'
const OurPartnersSection = () => {
    return (
        <div className='w-[85%] flex flex-col items-center'>
            <h1 className='text-base font-semibold text-[#C0C0C0] py-10'>OUR PARTNERS</h1>
            <div className='w-full flex items-center justify-center gap-x-7 px-10'>
                <Image src={'about-us/partners-img.svg'} alt='Partners Image' className='w-1/3' width={380} height={150} />
                <Image src={'about-us/partners-img.svg'} alt='Partners Image' className='w-1/3' width={380} height={150} />
                <Image src={'about-us/partners-img.svg'} alt='Partners Image' className='w-1/3' width={380} height={150} />
            </div>
        </div>
    )
}

export default OurPartnersSection