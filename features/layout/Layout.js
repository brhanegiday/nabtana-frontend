import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
function Layout(props) {
  return (
    <div>
      <Head>
        {/* TODO: Title to be fixed*/}
        <title>
          {props.title
            ? `${props.title} | Nabtana`
            : "Nabtana | Startup Directory"}
        </title>
        <meta name="description" content="Startup Directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-[#fcfafa] min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
