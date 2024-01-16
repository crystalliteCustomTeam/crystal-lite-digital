import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/AboutPage.module.css';


const AboutBody = () => {
    return (
        <>
            <section className={`${styles.aboutBody} scroll scroll-body`} data-section-name="scroll-body">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <h2>About Us</h2>
                                <p>Crystallite with over five years of expertise within the ICT trade includes a robust foothold within the region wherever it's with success reworked and mature to become premier business partners of the enterprise with Multi-Million greenback revenues, a hands over one, IT professionals and a blue chip shopper portfolio.</p>
                                <p>Crystallite has been steady increasing its services and merchandise portfolio by giving information Center, Cloud Computing and Managed Services. Especially we tend to experience in possessing one in all the leading and qualified human resources within the info technology arena that continues to be a supply of our competitive advantage.</p>
                                <p>We have specialists and specialists operating in every of our product domains to ascertain provision of tailor engendered solutions denoted for our valued customers. Crystallization provides value efficacious and economical solutions with high notch support abundant to the delectation of its valued customers.</p>
                                <p>The key to Crystallite's prosperity has been its B2B focus and its formative and enduring vision to be the leading system quantifying instrument and resolution supplier within the region.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutBody