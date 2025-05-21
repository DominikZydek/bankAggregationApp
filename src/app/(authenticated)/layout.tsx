import React from 'react'
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar />
            <div className="m-5">
                {children}
            </div>
            <BottomNavbar />
        </>
    )
}
export default Layout
