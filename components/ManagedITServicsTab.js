import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/MngdITServicsTab.module.css';
//
import icon1 from '../public/images/icons/tailored.png'
import icon2 from '../public/images/icons/operating.png'
import icon3 from '../public/images/icons/guaranteed.png'
import icon4 from '../public/images/icons/competent.png'


const ManagedITServicsTab = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value, string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    const [selectedService, setSelectedService] = useState('tab1');

    const handleSelectChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <>
            <section className={`${styles.manageItTabs} scroll scroll-servTab`} data-section-name="scroll-servTab">
                <Container>
                    <Row className={`${styles.manageItTabsRow} ${styles.deskTop}`}>
                        <Col xl={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Tailored_Business"
                                            />
                                            <h5>Tailored to your<br /> Business needs</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon2}
                                                alt="Operating_System"
                                            />
                                            <h5>Operating System</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="Guaranteed_SLA"
                                            />
                                            <h5>Guaranteed SLA</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon4}
                                                alt="Competent_Staff"
                                            />
                                            <h5>High Competent Staff</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Tailored to your <br />Business needs</h3>
                                        <p>
                                            Crystallite is ready to tailor your business needs by adding the value to the rapid change and advancement in your business. We support our clients in developing a new solution based on their unique business requirements.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Operating System</h3>
                                        <p>
                                            Both Linux and Windows operating systems are available with our dedicated hosting solutions. We also have optimized servers for e-commerce platforms such as Magneto.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Guaranteed SLA</h3>
                                        <p>
                                            Assuring our clients with 100% protected service with SLA providing you the highest level of security standard, customer support, and care.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>High Competent Staff</h3>
                                        <p>
                                            Crystallite has trained and exceedingly competent staff that can serve you with the best of their capacity. Our employees face and meet the challenge to resolve your problems in no time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                    </Row>

                    {/*========== For Mobile ==========*/}

                    <Row className={`${styles.tabsRow} tabsRow`}>
                        <Col xl={6}>
                            <div className={styles.navTabs}>
                                <select
                                    id="serviceSelect"
                                    className="form-select"
                                    value={selectedService}
                                    onChange={handleSelectChange}
                                >
                                    <option className='opt' value="tab1">Tailored to your Business needs</option>
                                    <option className='opt' value="tab2">Operating System</option>
                                    <option className='opt' value="tab3">Guaranteed SLA</option>
                                    <option className='opt' value="tab4">High Competent Staff</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Tailored to your <br />Business needs</h3>
                                        <p>
                                            Crystallite is ready to tailor your business needs by adding the value to the rapid change and advancement in your business. We support our clients in developing a new solution based on their unique business requirements.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Operating System</h3>
                                        <p>
                                            Both Linux and Windows operating systems are available with our dedicated hosting solutions. We also have optimized servers for e-commerce platforms such as Magneto.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Guaranteed SLA</h3>
                                        <p>
                                            Assuring our clients with 100% protected service with SLA providing you the highest level of security standard, customer support, and care.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>High Competent Staff</h3>
                                        <p>
                                            Crystallite has trained and exceedingly competent staff that can serve you with the best of their capacity. Our employees face and meet the challenge to resolve your problems in no time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ManagedITServicsTab