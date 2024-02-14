import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head className="flex min-h-screen flex-col items-center justify-between p-24">
        <title>Shop-Online</title>
        {/* <link rel="icon" href="/smallLogo.ico"></link> */}
      </Head>
      <main>
       <NavBar/>
      </main>
    </>
  );
}
