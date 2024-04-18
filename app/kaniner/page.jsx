import Image from "next/image";

export const metadata = {
  title: 'Kaniner',
  description: 'Kanin raser i Norge'
}

export default function Kaniner() {
    return <> 

    <main className="pt-10 flex flex-col items-center gap-10">
    <h1 className="text-4xl"> Kaninraser </h1>
    <p className="px-36">Dette er en side hvor du kan sjekke ut forskjellige type kaniner
      <br/>
      WOW! </p>
    
    <div className="flex flex-col gap-10 pb-20 md:flex-row">
     
        <section className="text-center text-xl">
          <h2>Dvergvedder</h2>
          <Image
          src="/dvergvedder.jpg" 
          height={500}
          width={500}
          alt="Bilde av Dvergvedder"/>
        </section>

        <section className="text-center text-xl">
          <h2>Løvehode</h2>
          <Image
          src="/løvehode.jpg"
          height={500}
          width={500}
          alt="Bilde av Løvehode"/>
        </section>

        <section className="text-center text-xl">
          <h2>Hermelin</h2>
          <Image
          src="/hermelin.jpg"
          height={500}
          width={500}
          alt="Bilde av Hermelin"/>
        </section>
      </div>
  </main></>
}