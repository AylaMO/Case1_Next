import Link from "next/link";
export const NavLink = ({link, text}) => {
    return (
        <Link className="border-2 px-9 py-2" href={link}>{text}</Link>
        
    )
}