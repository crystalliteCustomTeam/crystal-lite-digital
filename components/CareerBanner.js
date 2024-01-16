import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/CareerBanner.module.css';
//
import careerBanner from '../public/images/banners/career-banner.png'


const CareerBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.careerRow}>
                        <Col md={6}>
                            <div className={styles.careerBanner}>
                                <h1>Our <br />
                                    <span>Careers</span>
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
                                    src={careerBanner}
                                    alt="Career"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CareerBanner