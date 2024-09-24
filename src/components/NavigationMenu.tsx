"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { servicesOptions } from "@/lib/constants"

export function NavigationMenuElements() {
    const [homeTabActive, setHomeTabActive] = useState(false)
    const [productSuitesTabActive, setProductSuitesTabActive] = useState(false)
    const [servicesTabActive, setServicesTabActive] = useState(false)
    const [aboutUsTabActive, setAboutUsTabActive] = useState(false)

    const pathname = usePathname()

    const onTabClick = (tab: string) => {
        switch (tab) {
            case 'home':
                setHomeTabActive(true)
                setProductSuitesTabActive(false)
                setServicesTabActive(false)
                setAboutUsTabActive(false)
                break;
            case 'productSuites':
                setProductSuitesTabActive(true)
                setHomeTabActive(false)
                setServicesTabActive(false)
                setAboutUsTabActive(false)
                break;
            case 'services':
                setServicesTabActive(true)
                setHomeTabActive(false)
                setProductSuitesTabActive(false)
                setAboutUsTabActive(false)
                break;
            case 'aboutUs':
                setAboutUsTabActive(true)
                setHomeTabActive(false)
                setProductSuitesTabActive(false)
                setServicesTabActive(false)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        switch (pathname) {
            case '/':
                setHomeTabActive(true)
                setProductSuitesTabActive(false)
                setServicesTabActive(false)
                setAboutUsTabActive(false)
                break;
            case '/product-suites':
                setProductSuitesTabActive(true)
                setHomeTabActive(false)
                setServicesTabActive(false)
                setAboutUsTabActive(false)
                break;
            case '/about-us':
                setAboutUsTabActive(true)
                setHomeTabActive(false)
                setProductSuitesTabActive(false)
                setServicesTabActive(false)
                break;
            default:
                break;
        }
    }, [pathname]);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="relative" onClick={() => { onTabClick('home') }}>
                    {homeTabActive && (
                        <div className="w-4 h-1 bg-[#803FEA] rounded-[10px] absolute top-9 left-7"></div>
                    )}
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative" onClick={() => { onTabClick('productSuites') }}>
                    {productSuitesTabActive && (
                        <div className="w-4 h-1 bg-[#803FEA] rounded-[10px] absolute top-9 left-14"></div>
                    )}
                    <Link href="/product-suites" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Product Suites
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative">
                    {servicesTabActive && (
                        <div className="w-4 h-1 bg-[#803FEA] rounded-[10px] absolute top-9 left-10"></div>
                    )}
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent className="z-50">
                        <ul className="flex flex-col gap-3 p-4">
                            {servicesOptions.map((service) => (
                                <ListItem
                                    key={service.title}
                                    title={service.title}
                                    href={service.href}
                                    onClick={() => { onTabClick('services') }}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative" onClick={() => { onTabClick('aboutUs') }}>
                    {aboutUsTabActive && (
                        <div className="w-4 h-1 bg-[#803FEA] rounded-[10px] absolute top-9 left-10"></div>
                    )}
                    <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
