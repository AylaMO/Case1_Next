import { NavLink } from "../Atoms/NavLink";
export const LinkContainer = () => {
    return (
        <>
            <div className="hidden justify-between gap-6 md:flex">
                <NavLink link="/" text="Home"/>
                <NavLink link="/hunder" text="Hunder"/>
                <NavLink link="/katter" text="Katter"/>
                <NavLink link="/kaniner" text="Kaniner"/>
            </div>
        </>
    )
}