import React from 'react'
import Image from 'next/image'

const AnalyticsRoadmapSection = () => {
    return (
        <div className='w-full relative h-[1103px] overflow-y-hidden'>
            <div className="relative z-[-1]">
                <Image src={'/ai-consulting/data-maturity-bg.svg'} alt='Section BG' className='absolute left-64' width={1535} height={1103} />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[34px] leading-[50px] text-center w-[34%] mt-[60px]'>
                    Develop an Analytics Roadmap for Maturity and Growth
                </h1>
                <p className='text-lg font-medium text-center text-[#FFFFFF]/[0.7] pt-[26px] w-[37%]'>
                    Chart your path toward analytics maturity with a strategic roadmap that turns data insights into actionable business outcomes.
                </p>
                <Image src={'/ai-consulting/know-more-btn.svg'} alt='Know More' width={166} height={46} className='pt-10' />
                <Image src={'/ai-consulting/data-maturity-gif.svg'} alt='GIF' width={900} height={400} className='pt-[60px]' />
            </div>
        </div>
    )
}

export default AnalyticsRoadmapSection