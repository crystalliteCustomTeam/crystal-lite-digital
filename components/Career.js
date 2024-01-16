import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Career.module.css';
//
import careerbg from '../public/images/banners/career_bg.png'


const Career = () => {
    return (
        <>
            <section className={`${styles.career} scroll scroll-career`} data-section-name="scroll-career">
                <Container fluid>
                    <Row className={styles.careerRow}>
                        <Col lg={8} className={`${styles.careerCol} ps-0`}>
                            <div className={styles.careerLeft}>
                                <Image className={`${styles.careerImg} img-fluid`}
                                    src={careerbg}
                                    alt="careerbg"
                                />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.careerContent}`}>
                                <h2>Career & <br /><span>Opportunities</span></h2>
                                <p>Join our team to create the best<br />
                                    digital solutions.</p>
                                <div className={styles.form}>
                                    <Link className='primary-btn' href="/career">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Career