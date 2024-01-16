import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/AboutPage.module.css';
//
import abtBanner from '../public/images/banners/about-banner.png'


const AboutBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.aboutRow}>
                        <Col md={6}>
                            <div className={styles.aboutBanner}>
                                <h1><span>About Us</span></h1>
                                <p>Connecting you to a new world of possibilities.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={abtBanner}
                                    alt="About_Banner"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutBanner