import { Logo } from "../Atoms/Logo"
import { Title } from "../Atoms/Title"

export const NavLogo = () => {
    return (
        <>
        <div className="flex gap-3">
            <Logo/>
            <Title/>
            </div>
        </>
    )
}