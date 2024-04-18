
export const FooterBar = () => {
    return (
        <>
        <footer className="bg-greyGreen flex flex-col justify-center items-center">
            <h3>Veldig fin footer :D</h3>
           <section className="flex  ms:gap-3 sm:gap-8 lg:gap-40 p-8">
            
                <div>
                    <h3 className="text-xl">Finn Meg</h3>
                    <p>3211 Sandefjord</p>
                </div>

                <div>
                    <h3 className="text-xl">Ring Meg</h3>
                    <p>45 25 44 98</p> 
                </div>

                <div>
                    <h3 className="text-xl">Mail Meg</h3>
                    <p>ayla-olsen@outlook.com</p>
                </div> 
            </section>
        </footer>
        </>
    )
}