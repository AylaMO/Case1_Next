import Image from "next/image";

export const metadata = {
  title: 'Hunder',
  description: 'Hunde raser i Norge'
}

export default function Hunder() {
    return <> 
    
    <main className="pt-10 flex flex-col items-center gap-10">
    <h1 className="text-4xl"> Hunderaser </h1>
    <p className="px-36">Dette er en side hvor du kan sjekke ut forskjellige type hunder
      <br/>
      WOW! </p>
    <div className="flex gap-40 text-xl">
      
      
      
    </div>
    <div className="flex flex-col gap-10 pb-20 md:flex-row">
     
        <section className="text-center text-xl">
          <h2>Australsk Gjeterhund</h2>
          <a href="/hunder/australsk-gjeterhund">
          <Image
          src="/gjeterhund.jpg" 
          height={100}
          width={300}
          alt="Bilde av Australsk Gjeterhund"/></a>
        </section>

        <section className="text-center text-xl">
          <h2>Boston Terrier</h2>
          <Image
          src="/bostonterrier.jpg"
          height={300}
          width={300}
          alt="Bilde av Boston terrier"/>
        </section>

        <section className="text-center text-xl">
          <h2>Pomeranian</h2>
          <Image
          src="/pomeranian.jpg"
          height={300}
          width={225}
          alt="Bilde av Pomeranian"/>
        </section>
      
      </div>
  </main></>
}