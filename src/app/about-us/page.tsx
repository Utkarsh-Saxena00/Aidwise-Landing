import HeroSection from '@/sections/about-us/hero-section'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OurMissionSection from '@/sections/about-us/our-mission'
import QuickFactsSection from '@/sections/about-us/quick-facts'
import AwardsAndHistorySection from '@/sections/about-us/awards-and-history'
import OurPartnersSection from '@/sections/about-us/our-partners'
import OurTeamSection from '@/sections/about-us/our-team'
import ContactUsSection from '@/sections/about-us/contact-us'


const page = () => {
    return (
        <div className="flex flex-col items-center">
            <HeroSection />
            <Tabs defaultValue="mission" className='w-full flex flex-col items-center'>
                <TabsList className='w-[70%] rounded-full py-[30px] flex justify-evenly'>
                    <TabsTrigger value="mission" className='h-[56px] text-lg font-semibold'>Our Mission</TabsTrigger>
                    <TabsTrigger value="facts" className='h-[56px] text-lg font-semibold'>Quick Facts</TabsTrigger>
                    <TabsTrigger value="awards" className='h-[56px] text-lg font-semibold'>Award Winning</TabsTrigger>
                    <TabsTrigger value="history" className='h-[56px] text-lg font-semibold'>Our History</TabsTrigger>
                    <TabsTrigger value="partners" className='h-[56px] text-lg font-semibold'>Our Partners</TabsTrigger>
                    <TabsTrigger value="team" className='h-[56px] text-lg font-semibold'>Our Team</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="account">Make changes to your account here.</TabsContent> */}
            </Tabs>
            <OurMissionSection />
            <QuickFactsSection />
            <AwardsAndHistorySection />
            <OurPartnersSection />
            <OurTeamSection />
            <ContactUsSection />
        </div>
    )
}

export default page