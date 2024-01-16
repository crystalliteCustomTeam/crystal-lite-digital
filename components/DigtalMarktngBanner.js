import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngBanner.module.css';
//
import digiBanner from '../public/images/banners/digital-marketing-banner.png'


const DigtalMarktngBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.digiRow}>
                        <Col md={6}>
                            <div className={styles.digiBanner}>
                                <h1>Digital <br />
                                    <span>Marketing</span>
                                </h1>
                                <p>Digital Marketing is a blend of three ingredients, Passion, Creativity, and Consistency.</p>
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

export default DigtalMarktngBanner