import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/BusinessBanner.module.css';
//
import busIntBanner from '../public/images/banners/business-banner.png'


const BusinessBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.busIntRow}>
                        <Col md={6}>
                            <div className={styles.busIntBanner}>
                                <h1>Business <br />
                                    <span>Intelligence</span>
                                </h1>
                                <p>Bridging the gap between data and real-time business analytics for promising outcomes</p>
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
                                    src={busIntBanner}
                                    alt="Business_Intelligence"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BusinessBanner