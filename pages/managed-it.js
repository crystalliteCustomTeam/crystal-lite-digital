import React from "react";
import Head from "next/head";
//
const FullPage = React.lazy(() => import("@/fullpagecomp/ManagedItFullPage"));

export default function ManagedIT() {
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
