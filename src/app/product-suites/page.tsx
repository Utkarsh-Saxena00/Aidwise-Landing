import AIDataAnalyticsSection from '@/sections/product-suites/ai-data-analytics'
import CopilotsSection from '@/sections/product-suites/copilots'
import DomainBlueprintSection from '@/sections/product-suites/domain-blueprint'
import HealthcareSection from '@/sections/product-suites/healthcare'
import HeroSection from '@/sections/product-suites/hero-section'
import StrategySection from '@/sections/product-suites/strategy'
import React from 'react'

const productSuites = () => {
    return (
        <div className='flex flex-col'>
            <HeroSection />
            <AIDataAnalyticsSection />
            <DomainBlueprintSection />
            <HealthcareSection />
            <StrategySection />
            <CopilotsSection />
        </div>
    )
}

export default productSuites