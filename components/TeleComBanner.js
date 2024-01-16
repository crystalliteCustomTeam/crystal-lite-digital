import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/TeleComBanner.module.css';
//
import teleBanner from '../public/images/banners/telecommunication.png'


const TeleComBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.teleRow}>
                        <Col md={6}>
                            <div className={styles.teleBanner}>
                                <h1>Tele <br />
                                    <span>Communication</span>
                                </h1>
                                <p>Connecting you to a new world of possibilities.</p>
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
                                    src={teleBanner}
                                    alt="Telecommunication"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TeleComBanner