import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nimbley - Binnenkort beschikbaar</title>
        <meta name="description" content="Nimbley coming soon" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#2E4766]">
      <div className="mx-auto flex items-center justify-center px-5">
          <div className="mx-auto max-w-7xl">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600  to-pink-500 blur transition opacity-100 animate-pulse"></div>
              <div className="items-top relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
                <div className="p-2">
                    <div className="uppercase tracking-wider text-lg text-[#10C2BC] font-semibold">Binnenkort beschikbaar</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-[#2E4766] hover:underline">Ons fantastische nieuwe product komt eraan</a>
                    <p className="mt-2 text-gray-600">We werken hard om iets geweldigs voor u te maken. Blijf op de hoogte van updates!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      


      </main>
    </>
  );
};

export default Home;
