'use client';
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { NavLink } from "../Atoms/NavLink";


export const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
       setMenuOpen(!menuOpen);  
    } 
    return(
        <>
            <div className="md:hidden flex" onClick={handleNav}>
                <AiOutlineMenu size={25}/>
                <div className={
                    menuOpen 
                    ? "fixed right-0 top-0 ms:w-[50%] w-30% md:hidden h-screen bg-greyGreen p-8"
                    : "fixed left-[-100%] top-0 p10"
                }>
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer"><AiOutlineClose size={30}/></div>
                    </div>
                    <div className="flex flex-col">
                        <NavLink link="/" text="Home"/>
                        <NavLink link="/hunder" text="Hunder"/>
                        <NavLink link="/katter" text="Katter"/>
                        <NavLink link="/kaniner" text="Kaniner"/></div>
                </div>

            </div>

        </>
    )
}