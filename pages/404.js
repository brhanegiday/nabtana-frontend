import NextLink from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

function PageNotFound() {
  return (
    <>
      <Head>
        <title>Page not found | Nabtana</title>
        <meta name="description" content="Startup Directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full md:w-2/5 mx-auto py-10">
        <div className="h-[20vw] relative hover:skew-y-2 transition-transform duration-500">
          <Image
            src="/page-not-found/Page_not_found.png"
            alt="secure_login"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-4 flex items-center flex-col">
          <h1 className="text-tango-500 text-3xl text-center">
            UH OH! You<span>&apos;</span>re lost.
          </h1>
          <p className="text-center w-4/5 py-3 text-shark-400">
            The page you are looking for does not exist. Click the button below
            to go back to the homepage.
          </p>

          <NextLink href="/">
            <button className="py-2 px-7 shadow-md border-[1px] flex items-center space-x-2 group border-tango-500 rounded-full hover:bg-tango-500 transition-colors duration-300">
              <ArrowNarrowLeftIcon className="w-5 h-5 text-tango-500 group-hover:text-white" />
              <p className="text-tango-500 group-hover:text-white text-nab font-bold uppercase">
                home
              </p>
            </button>
          </NextLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
