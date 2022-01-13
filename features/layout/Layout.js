import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className="bg-[#E1E2E2] min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
