import React from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {children}
        </div>
    )
}
export default Layout
