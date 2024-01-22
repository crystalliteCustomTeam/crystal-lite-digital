import React from "react";
import Head from 'next/head';
// 
const FullPage = React.lazy(() => import("@/fullpagecomp/TelecomFullPage"));

export default function Telecommunication() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="robots" content="noindex" />
                {/* Meta Tags & OG Tags Added Through Route */}
            </Head>
            <FullPage />
        </>
    )
}
