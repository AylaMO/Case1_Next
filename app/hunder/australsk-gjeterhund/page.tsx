import Image from "next/image";

export const metadata = {
    title: 'Australsk Gjeterhund',
    description: 'Info om Australske gjeterhunder'
  }

export default function Hunderaser() {
    return <>
    <main className="flex flex-col justify-center items-center gap-10 pt-10 pb-10">
        <h1 className="text-5xl ">Australsk gjeterhund</h1>
        <p className=" px-36 p-14 bg-greyGreen">Til tross for hva navnet tilsier, ble denne hunderasen faktisk først fremavlet av amerikanske bønder. Rasen har siden blitt populær over hele verden.</p>

        <h2 className="text-3xl ">Viktig Informasjon</h2>
        <ul className="text-center">
            <li>Land: USA</li>
            <li>Størrelse: Mellomstor</li>
            <li>Gjennomsnittlig forventet levetid: 12-15 år</li>
            <li>Personlighets type: Livelig, Årvåken, Kvikk, Vennlig, Tøff, Lojal, Stille</li>
        </ul>
        <Image
        src="/gjeterhund2.avif"
        width={500}
        height={500}
        alt="Bilde av en lys farget Australsk gjeterhund"/>
        
                </main></>
}