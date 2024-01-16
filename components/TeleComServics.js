import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/TeleComServics.module.css';
//
import icon1 from '../public/images/icons/tele-fixed.png'
import icon2 from '../public/images/icons/tele-sms.png'
import icon3 from '../public/images/icons/tele-internet.png'


const TeleComServics = () => {

    return (
        <>
            <section className={`${styles.teleService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.teleServiceRow}>
                        <Col xl={12}>
                            <div className={styles.teleServ}>
                                <h2>Paving the way for a better <br />Telecommunication experience.</h2>
                                <p>Crystallite's journey as a company began in 2008 to revolutionize the Telecommunication <br /> sector, and we did just that with our team of professionals who turned our dream into a reality. <br /> The possibilities were endless, and so were our efforts to ensure that we provided a seamless <br /> experience for our audience.</p>
                                <h5>Awards and Recommendations:</h5>
                                <p>Crystallite hones the following Awards and the Licenses:</p>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.teleCards}>
                                <Image
                                    src={icon1}
                                    alt="Fixed"
                                />
                                <span>Fixed Local Loop License</span>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.teleCards}>
                                <Image
                                    src={icon2}
                                    alt="Sms"
                                />
                                <span>Fixed Local Loop License</span>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.teleCards}>
                                <Image
                                    src={icon3}
                                    alt="Internet"
                                />
                                <span>Fixed Local Loop License</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TeleComServics