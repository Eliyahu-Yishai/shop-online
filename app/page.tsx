import { NavBar, Banner } from "@/components/index"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop-Online</title>
        {/* <link rel="icon" href="smallLogo.ico"></link> */}
      </Head>
      <main className="bg-lightBlue">
        <NavBar />
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
        </div>
      </main>
    </>
  );
}
