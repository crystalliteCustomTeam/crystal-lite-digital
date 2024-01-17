import React from "react";
import Head from 'next/head';
//
const FullPage = React.lazy(() => import("@/fullpagecomp/ContentWriteFullPage"));

export default function ContentWritingServices() {
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
