import React from 'react'
import Image from 'next/image'

const DataMaturitySection = () => {
    return (
        <div className='w-full relative h-[1103px] overflow-y-hidden'>
            <div className="relative z-[-1]">
                <Image src={'/ai-consulting/data-maturity-bg.svg'} alt='Section BG' className='absolute left-64' width={1535} height={1103} />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[34px] leading-[50px] text-center w-[34%] mt-[60px]'>
                    Advance Your Data Maturity for Strategic Insights
                </h1>
                <p className='text-lg font-medium text-center text-[#FFFFFF]/[0.7] pt-[26px] w-[37%]'>
                    Move beyond data collection—build a mature data infrastructure that powers smarter decisions and unlocks a competitive edge.
                </p>
                <Image src={'/ai-consulting/know-more-btn.svg'} alt='Know More' width={166} height={46} className='pt-10' />
                <Image src={'/ai-consulting/data-maturity-gif.svg'} alt='GIF' width={900} height={400} className='pt-[60px]' />
            </div>
        </div>
    )
}

export default DataMaturitySection