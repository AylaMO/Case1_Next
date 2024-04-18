
import { Hamburger } from "../Molecules/Hamburger";
import { LinkContainer } from "../Molecules/LinkContainer";
import { NavLogo } from "../Molecules/NavLogo";


export const NavBar = () => {
    return (
        <>
        <nav className="w-full flex h-24 justify-between items-center border-b-2 px-6 py-2"> 
            <NavLogo/>
            <LinkContainer/>
            <Hamburger/>
       </nav>
        </>
    )
}