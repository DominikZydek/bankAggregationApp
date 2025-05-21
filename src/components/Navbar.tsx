import React from 'react'

import { MenuIcon, SearchIcon, BellIcon, CircleUserIcon } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="flex text-xl justify-between items-center px-1 py-3 bg-neutral-200 dark:bg-neutral-800 border-b-1 border-b-neutral-400 dark:border-b-neutral-600">
            <div className="flex gap-2 items-center">
                <MenuIcon />
                <h1>Bank Aggregation App</h1>
            </div>
            <div className="flex gap-2 items-center">
                <SearchIcon />
                <BellIcon />
                <CircleUserIcon />
            </div>
        </nav>
    )
}
export default Navbar
