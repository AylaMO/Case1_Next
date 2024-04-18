import Image from "next/image";

export const metadata = {
  title: 'Katter',
  description: 'Katte raser i Norge'
}

export default function Katter() {
    return  (
      <>
    <main className="pt-10 flex flex-col items-center gap-10">
    <h1 className="text-4xl"> Katteraser </h1>
    <p className="px-36">Dette er en side hvor du kan sjekke ut forskjellige type katter
      <br/>
      WOW! </p>
    
    <div className="flex flex-col gap-10 pb-20 md:flex-row">
     <section className="text-center text-xl">
        <h2>Burmeser</h2>
        <Image
        src="/burmeser.jpg" 
        height={500}
        width={400}
        alt="Bilde av burmeser"/>
      </section>

      <section className="text-center text-xl">
        <h2>Perser</h2>
        <Image
        src="/persian.jpg"
        height={500}
        width={400}
        alt="Bilde av persian"/>
      </section>

      <section className="text-center text-xl">
        <h2>RagDoll</h2>
        <Image
        src="/ragdoll.jpg"
        height={500}
        width={400}
        alt="Bilde av ragdoll"/>
      </section>

      </div>
  </main></>
)}