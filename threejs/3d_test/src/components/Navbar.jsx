import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLists } from '../config/constants'

export default function Navbar() {
  return (
    (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-gray-50">
        <nav className="flex w-full screen-max-width">
            {/* <img src={appleImg} alt='Icon' width={14} height={18} /> */}

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav) => (
                    <NavLink
                    key={nav.label}
                    to={nav.path}
                    className={({ isActive }) =>
                        `px-5 text-sm cursor-pointer transition-all ${
                        isActive ? 'text-amber-200' : 'text-gray hover:text-amber-200'
                        }`
                    }
                    >
                    {nav.label}
                    </NavLink>
                ))}
            </div> 

            {/* <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg}  alt="search" width={18} height={18}/>
                <img src={bagImg}  alt="bag" width={18} height={18}/>
            </div> */}
        </nav>
    </header>
  )
  )
}