import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full text-white text-center">
            <div className="bg-[#141414] px-[60px] py-[25px] w-full rounded-t-3xl">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">Ready to Transform Your Business?</span>
                    <Image className="cursor-pointer" src={'/footer/whatsapp-contact.svg'} alt="whatsapp contact" width={147} height={40} />
                </div>
                <div className="py-[25px]">
                    <hr />
                </div>
                <div className="flex justify-between pb-6">
                    <div className="flex flex-col">
                        <Image src={'/logo.svg'} alt="Aidwise" width={220} height={50} />
                        <div className="w-[53%] flex flex-col text-justify pt-6">
                            <p className="text-base text-[#FCFCFD]/[0.7] font-semibold">At Aidwise, we are committed to empowering businesses with cutting-edge AI solutions. Reach out to us for innovative strategies and expert consultation to elevate your business.</p>
                            <span className="text-base text-[#FCFCFD]/[0.7] pt-4 font-normal">Connect with us for the latest insights and updates in the AI industry.</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div className="flex flex-col gap-y-3">
                            <span className="text-base font-bold text-[#FF753E]">Services</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <span className="text-base font-bold text-[#FF753E]">Industry</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <span className="text-base font-bold text-[#FF753E]">Contact</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                            <span className="text-sm font-medium">Link Here</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[14px] flex items-center justify-between px-[60px]">
                <p className="text-sm font-normal">&copy; 2024 Aidwise.ai All trademarks are owned by Aidwise.ai, or used with permission.</p>
                <div className="flex gap-x-5">
                    <p className="text-sm font-normal">Connect with us:</p>
                    <Image className="cursor-pointer" src={'/footer/linkedin-logo.svg'} alt="LinkedIn" width={18} height={18} />
                    <Image className="cursor-pointer" src={'/footer/gmail-logo.svg'} alt="LinkedIn" width={18} height={18} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
