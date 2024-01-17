import React from "react";
import Head from 'next/head';
// 
const Thankyou = React.lazy(() => import("@/components/ThankYou"));

export default function thankyou() {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                {/* Meta Tags & OG Tags Added Through Route */}
            </Head>
            <Thankyou />
        </>
    )
}

