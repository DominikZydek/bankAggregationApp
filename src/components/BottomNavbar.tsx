'use client'

import React from 'react'

import { BarChart2Icon, ClockIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const BottomNavbar = () => {

    const pathname = usePathname()
    console.log(pathname)

    return (
        <nav className="fixed bottom-0 left-0 flex justify-around w-full text-xl bg-neutral-200
        dark:bg-neutral-800 border-t-1 border-t-neutral-400 dark:border-t-neutral-600">
            <Link href="/overview" className={`flex flex-col justify-center items-center gap-1 flex-1 px-1 py-3 hover:bg-neutral-400 dark:hover:bg-neutral-600
            ${
                pathname === '/overview' ? 'bg-neutral-400 dark:bg-neutral-600' : ''
            }`}>
                <BarChart2Icon />
                <span>Overview</span>
            </Link>
            <Link href="/history" className={`flex flex-col justify-center items-center gap-1 flex-1 px-1 py-3 hover:bg-neutral-400 dark:hover:bg-neutral-600
            ${
                pathname === '/history' ? 'bg-neutral-400 dark:bg-neutral-600' : ''
            }`}>
                <ClockIcon />
                <span>History</span>
            </Link>
            <Link href="/profile" className={`flex flex-col justify-center items-center gap-1 flex-1 px-1 py-3 hover:bg-neutral-400 dark:hover:bg-neutral-600
            ${
                pathname === '/profile' ? 'bg-neutral-400 dark:bg-neutral-600' : ''
            }`}>
                <UserIcon />
                <span>Profile</span>
            </Link>
        </nav>
    )
}
export default BottomNavbar
