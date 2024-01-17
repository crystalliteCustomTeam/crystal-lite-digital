import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
//
import Header from '@/components/Header'
import Loader from "@/components/Loader";

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

  return (
    <>
      <Header />
      {imagesLoaded ? <Component {...pageProps} /> : <Loader />}
    </>
  )
}

