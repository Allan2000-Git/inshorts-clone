import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = ({setCategories}) => {
    return (
        <>
            <nav className="bg-white navbar h-[80px] flex items-center px-8">
                <div className="flex-[0.5]">
                    <Sidebar setCategories={setCategories} />
                </div>
                <figure className="w-[150px]">
                    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshort logo" />
                </figure>
            </nav>
        </>
    )
}

export default Navbar
