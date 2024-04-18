import Image from "next/image";

export const Logo = () => {
    return (
        <>
            <div className="min-w-9 max-w-9">
                <a href="/">
                <Image src="/Paw.png"
                width={36}
                height={36}
                alt="Paw Logo Colored"
                layout="responsive"
                priority/></a>
            </div>
        </>
    )
}