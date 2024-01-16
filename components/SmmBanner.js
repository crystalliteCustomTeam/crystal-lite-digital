import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngBanner.module.css';
//
import digiBanner from '../public/images/banners/digital-marketing-banner.png'


const SmmBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.digiRow}>
                        <Col md={6}>
                            <div className={styles.digiBanner}>
                                <h1>Social Media <br />
                                    <span>Marketing</span>
                                </h1>
                                <p>Crystallite Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND.</p>
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

export default SmmBanner