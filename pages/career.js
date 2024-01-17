import React from "react";
import Head from 'next/head';
//
const FullPage = React.lazy(() => import("@/fullpagecomp/CareerFullPage"));

export default function Career() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                {/* Meta Tags & OG Tags Added Through Route */}
            </Head>
            <FullPage />
        </>
    )
}
