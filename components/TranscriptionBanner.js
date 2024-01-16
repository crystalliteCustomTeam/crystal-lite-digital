import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/TranscriptionBanner.module.css';
//
import transBanner from '../public/images/banners/transcription-banner.png'


const TranscriptionBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.transRow}>
                        <Col md={6}>
                            <div className={styles.transBanner}>
                                <h1>
                                    <span>Transcription</span> Services That Make a Difference
                                </h1>
                                <p>At Transcriber Hub, our goal is to keep your satisfaction level to highest standards through our revolutionary 3 – Tier process. Transcriber Hub takes pride of providing world-class services with surprising turnaround time in a highly affordable price.</p>
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
                                    src={transBanner}
                                    alt="Transcription"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TranscriptionBanner