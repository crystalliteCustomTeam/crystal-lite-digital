import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/MngdITBanner.module.css';
//
import ITBanner from '../public/images/banners/it-banner.png'


const ManagedITBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.manageITRow}>
                        <Col md={6}>
                            <div className={styles.manageITBanner}>
                                <h1>Managed <br />
                                    <span>IT Service</span>
                                </h1>
                                <p>Our solutions are simpler, smarter, and of course efficient.</p>
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
                                    src={ITBanner}
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

export default ManagedITBanner