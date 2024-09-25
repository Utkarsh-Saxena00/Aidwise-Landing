import AIMaturitySection from '@/sections/ai-consulting/ai-maturity'
import AnalyticsRoadmapSection from '@/sections/ai-consulting/analytics-roadmap'
import DataMaturitySection from '@/sections/ai-consulting/data-maturity'
import HeroSection from '@/sections/differentiate-ai/hero-section'
import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col items-center">
            <HeroSection />
            <AIMaturitySection />
            <DataMaturitySection />
            <AnalyticsRoadmapSection />
        </div>
    )
}

export default page