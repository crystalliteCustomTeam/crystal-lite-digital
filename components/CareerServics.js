import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/CareerServics.module.css';
//
import icon1 from '../public/images/icons/tele-fixed.png'


const CareerServics = () => {

    return (
        <>
            <section className={`${styles.careerService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.careerRow}>
                        <Col xl={10}>
                            <div className={styles.careerServ}>
                                <h2>Careers</h2>
                                <Row className={styles.careerServiceRow}>
                                    <Col md={6}>
                                        <div className={styles.careerCards}>
                                            <Image
                                                src={icon1}
                                                alt="Software_Engineer"
                                            />
                                            <span>Software Engineer</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={styles.careerCards}>
                                            <Image
                                                src={icon1}
                                                alt="Business_Coordinator"
                                            />
                                            <span>Business Coordinator</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={styles.careerCards}>
                                            <Image
                                                src={icon1}
                                                alt="Linux"
                                            />
                                            <span>Linux/Unix System</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={styles.careerCards}>
                                            <Image
                                                src={icon1}
                                                alt="Business_Consultant"
                                            />
                                            <span>Business Consultant</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CareerServics