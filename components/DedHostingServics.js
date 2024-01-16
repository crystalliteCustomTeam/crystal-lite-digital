import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingServics.module.css';


const DedHostingServics = () => {

    return (
        <>
            <section className={`${styles.dedhostingService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.dedhostingRow}>
                        <Col md={10}>
                            <div className={styles.dedhostingBody}>
                                <h2>Dedicated Server Hosting</h2>
                                <p>
                                    Dedicated server hosting covers complete infrastructure management. Crystallite takes full responsibility for the
                                    monitoring, maintenance, security, and operation of your managed solution.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={styles.dedlist}>
                                <h2><span>Dedicated Hosting</span></h2>
                                <p>
                                    If you require a secure and high-performance solution, then Crystallite dedicated servers<br />
                                    are ideal choice. Physical servers that are dedicated to you, guarantee both reliability and performance,<br />
                                    providing you with a perfect solution for critical business applications.
                                </p>
                                <ul className={styles.listItems}>
                                    <li>
                                        Protected by an industry-leading SLA - 15 min response, 1-hour hardware replacement.
                                    </li>
                                    <li>
                                        Speed and unlimited traffic - 10G network infrastructure with multiple peering points.
                                    </li>
                                    <li>
                                        Hard drive redundancy - back-up servers ready when required.
                                    </li>
                                    <li>
                                        Support - 24/7/365 access to extremely qualified hosting experts.
                                    </li>
                                    <li>
                                        High availability - 100% network uptime guaranteed.
                                    </li>
                                    <li>
                                        Secure - highest levels of data protection.
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

export default DedHostingServics