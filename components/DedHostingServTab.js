import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingServTab.module.css';
//
import icon1 from '../public/images/icons/monitoring.png'
import icon2 from '../public/images/icons/operating-system.png'
import icon3 from '../public/images/icons/app-support.png'
import icon4 from '../public/images/icons/monitoring-1.png'
import icon5 from '../public/images/icons/operating-system-1.png'
import icon6 from '../public/images/icons/app-suppot-1.png'


const DedHostingServTab = () => {

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
            <section className={`${styles.dedhostingService} scroll scroll-servTab`} data-section-name="scroll-servTab">
                <Container>
                    <Row className={`${styles.tabsRow} ${styles.deskTop}`}>
                        <Col lg={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>24/7 System <br />Monitoring</h3>
                                        <p>
                                            We have a highly responsive support team which is available 24/7 to monitor the system in order to keep you connected with your business and always ready to address your queries.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Security And <br /> Performance</h3>
                                        <p>
                                            All solutions are protected by a shared N+1 Cisco ASA firewall to ensure our network and client solutions are secured. High levels of performance and redundancy are achieved by utilizing redundant pairs of servers and high availability techniques, such as mirroring and replication.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Unlimited Onsite & <br />Remote Support.</h3>
                                        <p>
                                            Crystallite provides clients with an unlimited onsite and remote service accessibility from everywhere with different support packages.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                        <Col lg={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Monitoring"
                                            />
                                            <h5>24/7 System Monitoring</h5>
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
                                            <h5>Security And Performance</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="Support"
                                            />
                                            <h5>Unlimited Onsite &
                                                Remote Support.</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
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
                                    <option className='opt' value="tab1">24/7 System Monitoring</option>
                                    <option className='opt' value="tab2">Security And Performance</option>
                                    <option className='opt' value="tab3">Unlimited Onsite & Remote Support.</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>24/7 System <br />Monitoring</h3>
                                        <p>
                                            We have a highly responsive support team which is available 24/7 to monitor the system in order to keep you connected with your business and always ready to address your queries.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Security And <br /> Performance</h3>
                                        <p>
                                            All solutions are protected by a shared N+1 Cisco ASA firewall to ensure our network and client solutions are secured. High levels of performance and redundancy are achieved by utilizing redundant pairs of servers and high availability techniques, such as mirroring and replication.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Unlimited Onsite & <br />Remote Support.</h3>
                                        <p>
                                            Crystallite provides clients with an unlimited onsite and remote service accessibility from everywhere with different support packages.
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

export default DedHostingServTab