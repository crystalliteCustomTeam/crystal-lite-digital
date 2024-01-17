import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';


const MetaData = () => {

    const router = useRouter();
    const PagePath = router.asPath;

    return (
        <>
            {PagePath === '/' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Home - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Home - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/" />
                    <meta property="og:site_name" content="Home - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/about-us' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">About - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="About - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/about-us/" />
                    <meta property="og:site_name" content="About - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/contact-us' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Contact - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Contact - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/contact-us/" />
                    <meta property="og:site_name" content="Contact - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/thank-you' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Thank You - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Thank You - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/thank-you/" />
                    <meta property="og:site_name" content="Thank You - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/business-intelligence' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Business Intelligence - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Business Intelligence - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/business-intelligence/" />
                    <meta property="og:site_name" content="Business Intelligence - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/career' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Career - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Career - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/career/" />
                    <meta property="og:site_name" content="Career - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/content-writing-services' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Content Writing Services - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Content Writing Services - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/content-writing-services/" />
                    <meta property="og:site_name" content="Content Writing Services - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/dedicated-hosting' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Dedicated Hosting - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Dedicated Hosting - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/dedicated-hosting/" />
                    <meta property="og:site_name" content="Dedicated Hosting - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/digital-marketing' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Digital Marketing - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Digital Marketing - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/digital-marketing/" />
                    <meta property="og:site_name" content="Digital Marketing - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/managed-it' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Managed IT - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Managed IT - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/managed-it/" />
                    <meta property="og:site_name" content="Managed IT - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/seo' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Search Engine Optimization - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Search Engine Optimization - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/seo/" />
                    <meta property="og:site_name" content="Search Engine Optimization - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/social-media-marketing' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Social Media Marketing - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Social Media Marketing - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/social-media-marketing/" />
                    <meta property="og:site_name" content="Social Media Marketing - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/telecommunication' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Telecommunication - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Telecommunication - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/telecommunication/" />
                    <meta property="og:site_name" content="Telecommunication - Crystallite Pvt Ltd" />
                </Head>
            ) : PagePath === '/transcription' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Transcription - Crystallite Pvt Ltd</title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Transcription - Crystallite Pvt Ltd" />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://crystallitedigital.com/transcription/" />
                    <meta property="og:site_name" content="Transcription - Crystallite Pvt Ltd" />
                </Head>
            )
                : null
            }
        </>
    )
}

export default MetaData
