import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingServics.module.css'; 


const BusinessAbt = () => {
    return (
        <>
            <section className={`${styles.dedhostingService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.dedhostingRow}>
                        <Col md={10}>
                            <div className={styles.dedhostingBody}>
                                <h2>Business Intelligence</h2>
                                <p>
                                    Crystallite will look out of your operations and documentation workloads, so you’ll focus a lot of on generating a lot of business and growth. We have a tendency to provide you with the liberty of macro managing your business. We’ve in-house time unit Specialists, Accountants and Document Coordinators. Having the expertise of providing services to a varied phase of Industries. Contour all the systems and may with pride say ‘Been there; done that’. This provides you with the peace of mind that everyone the systems designed by USA area unit 100 percent economical.
                                </p>
                                <p>
                                    Our saying is ‘Excellence par expectations’
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={styles.dedlist}>
                                <h2><span>Industry Expertise</span></h2>
                                <ul className={styles.listItems}>
                                    <li>
                                        Energy, Natural Resources & Utilities BPO.
                                    </li>
                                    <li>
                                        Global media and telecommunication BPO.
                                    </li>
                                    <li>
                                        Health care BPO.
                                    </li>
                                    <li>
                                        Transportation BPO.
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

export default BusinessAbt