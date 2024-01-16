import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import styles from '@/styles/HomeBanner.module.css';
import style from '@/styles/Thank.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
//
import search from '../public/images/icons/search-icon.png'


const Thankyou = () => {
    return (
        <>
            <section className={`${styles.banner} ${style.thnks}`}>
                <video className={`${styles.bgVideo}`} autoPlay muted loop src="/images/banner__video.mp4" type="video/mp4"></video>
                <div className={`${styles.bannerBody} ${style.thnksBody}`}>
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <div className={styles.bannerContent}>
                                    <div className={styles.shadedText}>
                                        <h1>CRYS</h1>
                                    </div>
                                    <div className={styles.social}>
                                        <div className={styles.socialIcon}>
                                            <span className={styles.borderLine}></span>
                                            <Link href="https://www.facebook.com/CrystallitePakistan" target={'_blank'}>
                                                <FaFacebookF />
                                            </Link>
                                            <Link href="https://www.instagram.com/crystallitepakistan/" target={'_blank'}>
                                                <FaInstagram />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/crystallitepakistan/" target={'_blank'}>
                                                <FaLinkedinIn />
                                            </Link>
                                        </div>
                                        <div className={styles.search}>
                                            <div className={`${styles.searchIcon}  mx-auto`}>
                                                <Link href="/career">
                                                    <Image
                                                        src={search}
                                                        alt="search"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Thank You</h4>
                                    <Link href="/" className={style.primaryBtn}>
                                        Back To Home
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Thankyou