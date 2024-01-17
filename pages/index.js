import React from "react";
import Head from "next/head";
//
const FullPage = React.lazy(() => import("@/fullpagecomp/HomeFullPage"));

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        {/* Meta Tags & OG Tags Added Through Route */}
      </Head>
      <FullPage />
    </>
  );
}
