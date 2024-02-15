import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop-Online</title>
        {/* <link rel="icon" href="/smallLogo.ico"></link> */}
      </Head>
      <main>
       <NavBar/>
      </main>
    </>
  );
}
