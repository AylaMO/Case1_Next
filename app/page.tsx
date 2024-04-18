import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="pt-10 flex flex-col items-center gap-10">
      <h1 className="text-4xl"> Husdyr i Norge </h1>
      <p className="px-36">Dette er en side hvor du kan sjekke ut forskjellige type husdyr og dems raser
      <br/>
      wee! </p>
      <div className=" flex flex-col gap-10 pb-20 md:flex-row">
        <section className="text-center text-xl">
          <h2>Hunder</h2>
          <a href="/hunder">
          <Image
          src="/hunder1.jpg" 
          height={400}
          width={400}
          alt="Bilde av 11 forskjellige Hunder"/></a>
        </section>

        <section className="text-center text-xl">
          <h2>Katter</h2>
          <a href="/katter">
          <Image
          src="/katter1.jpg"
          height={400}
          width={400}
          alt="Bilde av 4 kattunger i forskjellig farger"/></a>
        </section>

        <section className="text-center text-xl"> 
        <h2>Kaniner</h2>
        <a href="/kaniner">
        <Image
        src="/kaniner.jpg"
        height={400}
        width={400}
        alt="'Bilde av 8 lyse brune kaniner"/></a>
        </section>
        </div>
    </main></>
  );
}
