import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
//
import Header from '@/components/Header'
import Loader from "@/components/Loader";
import MetaData from "@/components/MetaData";

export default function App({ Component, pageProps }) {

  // =======================================
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 5000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // =======================================
  const sluginer = useRouter().asPath;
  const weblink = "https://crystallitedigital.com/";
  const newcol = weblink + sluginer;
  // =======================================

  return (
    <>
      <Head>
        <meta name="Resource-type" content="Document" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={newcol} />
        {/* FavIcon */}
        <link rel="icon" href="/images/logo.svg" sizes="32x32" title="logo" alt="favicon" />
      </Head>
      <MetaData />
      <Header />
      {imagesLoaded ? <Component {...pageProps} /> : <Loader />}
    </>
  )
}

