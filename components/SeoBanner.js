import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngBanner.module.css';
//
import digiBanner from '../public/images/banners/digital-marketing-banner.png'


const SeoBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.digiRow}>
                        <Col md={6}>
                            <div className={styles.digiBanner}>
                                <h1>SEO <br />
                                    <span>Services</span>
                                </h1>
                                <p>Crystallite is the best SEO services provider that guarantees your brand wins more audience, drives sales, and maximizes return on investment. With our experienced SEO team and state-of-the-art technology, we help you be FOUND the way you have found us!</p>
                                <div className={`${styles.form} mt-4`}>
                                    <Link className='primary-btn' href="/career">
                                        Join Us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={digiBanner}
                                    alt="Digital_Marketing"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SeoBanner