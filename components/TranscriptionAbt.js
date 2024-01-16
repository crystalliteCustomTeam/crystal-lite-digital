import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingServics.module.css'; 


const TranscriptionAbt = () => {
    return (
        <>
            <section className={`${styles.dedhostingService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.dedhostingRow}>
                        <Col md={10}>
                            <div className={styles.dedhostingBody}>
                                <h2>What Do We Provide?</h2>
                                <p>
                                    The market of transcription services is quite saturated but this is where Transcriber Hub holds the competitive advantage with our timely delivery, 99% accuracy, and affordable pricing, all in one package. The motive always has been to provide service that is unparalleled and to excel in the transcription industry. We cover a variety of disciplines but some of the most abundant ones include businesses, legal proceedings, academic requirements, podcasts, insurance claims, etc.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={styles.dedlist}>
                                <h2><span>What makes us stand out?</span></h2>
                                <p>
                                    If you require a secure and high-performance solution, then Crystallite dedicated servers<br />
                                    are ideal choice. Physical servers that are dedicated to you, guarantee both reliability and performance,<br />
                                    providing you with a perfect solution for critical business applications.
                                </p>
                                <ul className={styles.listItems}>
                                    <li>
                                        Our transparent pricing and affordable rates
                                    </li>
                                    <li>
                                        100% Human effort at its core and no bots
                                    </li>
                                    <li>
                                        Quick turn-around that saves your time
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TranscriptionAbt