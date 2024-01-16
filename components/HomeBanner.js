import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from '@/styles/HomeBanner.module.css';
//
import search from '../public/images/icons/search-icon.png'


const HomeBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <video className={`${styles.bgVideo}`} autoPlay muted loop src="/images/banner__video.mp4" type="video/mp4"></video>
                <div className={styles.bannerBody}>
                    <Container fluid>
                        <Row>
                            <Col xl={12}>
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
                                        {/* <div className={styles.search}>
                                            <div className={`${styles.searchIcon}  mx-auto`}>
                                                <Link href="/career">
                                                    <Image
                                                        src={search}
                                                        alt="search"
                                                    />
                                                </Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <Container>
                                        <Row>
                                            <Col md={8}>
                                                <div className={styles.bannerText}>
                                                    <h1>We Create <br />Ultimate User <br />
                                                        <span>Experience</span>
                                                    </h1>
                                                    <div className={styles.lead}>
                                                        <p>Modern Life can be complicated. Simplify it with Crystallite's Services!</p>
                                                    </div>
                                                    <div className={styles.form}>
                                                        <Link className='banner-primary-btn' href="/contact">
                                                            Contact Us
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default HomeBanner