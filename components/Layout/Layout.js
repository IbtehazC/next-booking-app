import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title = "Book Best Hotels for your Holiday" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
