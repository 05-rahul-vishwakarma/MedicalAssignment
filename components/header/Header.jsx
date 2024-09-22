import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image'
import TemporaryDrawer from './Drawer'

const data = [
    { id: 1, data: "home", link: "/home" },
    { id: 2, data: "services", link: "/services" },
    { id: 1, data: "blog", link: "/blog" },
    { id: 1, data: "About us", link: "/about-us" },
]

export default function Header() {
    return (
        <header className='w-[100%] md:px-[4rem] px-2 py-4 flex justify-between items-center sticky top-0 bg-white z-10 shadow-md '>
            <Image src={"/logo.png"} alt='logo' width={150} height={100} className='' />
            <Menubar className="border-none shadow-none hidden md:flex " >
                {
                    data?.map((data, i) => (
                        <MenubarMenu key={i}>
                            <MenubarTrigger className="hover:text-[teal] font-semibold text-sm " > {data?.data} </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem> {data?.data} </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    ))
                }
            </Menubar>
            <h1 className='text-sm font-semibold border-[1px] border-[teal] px-4 py-1 rounded-sm text-[#020043] hidden ' >Get Course
            
            </h1>
            <TemporaryDrawer />
        </header>
    )
}
