import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import busStyles from '@/styles/BusinessServics.module.css';
import styles from '@/styles/MngdITServicsTab.module.css';
//
import icon1 from '../public/images/icons/health.png'
import icon2 from '../public/images/icons/financial.png'
import icon3 from '../public/images/icons/retail.png'
import icon4 from '../public/images/icons/manufacturing.png'
import icon5 from '../public/images/icons/tech.png'
import icon6 from '../public/images/icons/sector.png'
import icon7 from '../public/images/icons/health-1.png'
import icon8 from '../public/images/icons/financial-1.png'
import icon9 from '../public/images/icons/retail-1.png'
import icon10 from '../public/images/icons/manufacturing-1.png'
import icon11 from '../public/images/icons/tech-1.png'
import icon12 from '../public/images/icons/sector-1.png'


const BusinessServics = () => {

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
            <section className={`${busStyles.busIntService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={`${styles.manageItTabsRow} ${styles.deskTop} align-items-center`}>
                        <Col xl={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Healthcare"
                                            />
                                            <h5>Healthcare</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon2}
                                                alt="Financial"
                                            />
                                            <h5>Financial Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="Retail"
                                            />
                                            <h5>Retail</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon4}
                                                alt="Manufacturing"
                                            />
                                            <h5>Manufacturing</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon5}
                                                alt="Tech"
                                            />
                                            <h5>High Tech</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon6}
                                                alt="Sector"
                                            />
                                            <h5>Public Sector</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon7}
                                            alt="Healthcare"
                                        />
                                        <h3>Healthcare</h3>
                                        <p>
                                            Connect with the endless possibilities that help you grow in the Healthcare industry as now you get to innovate with the help of Crystallite’s modern Healthcare Analytics. It empowers your establishment to quickly analyze available data and generate insights in real-time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="Healthcare"
                                        />
                                        <h3>Financial Services</h3>
                                        <p>
                                            Combat inconsistencies in with Crystallite’s state-of-the-art Financial Analytics. Drive accurate break-downs with insights in real-time of any data leaks or financial dissipation. This enables you to make informed decisions when it comes to deriving profitable outcomes.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon9}
                                            alt="Healthcare"
                                        />
                                        <h3>Retail</h3>
                                        <p>
                                            Transform the retail experience of your venture and your customers with Crystallite’s Retail Analytics. You retail operations are now faster, smarter, and more streamlined to yield customer-centric outcomes. This not only allows you to improve profitability but also maximize efficiency while empowering your customers.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon10}
                                            alt="Healthcare"
                                        />
                                        <h3>Manufacturing</h3>
                                        <p>
                                            We at Crystallite recognize that every second in the manufacturing industry is crucial as any bottlenecks or latency issues can set you back for a massive financial hit. This is where Crystallite comes in to transform the way that your business performs to serve the modern customers’ needs of today.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab5'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon11}
                                            alt="Healthcare"
                                        />
                                        <h3>High Tech</h3>
                                        <p>
                                            The world of tech has shifting dynamics that feature instant innovation and is fueled by the ability to respond quickly to changes. This is where Crystallite’s High-Tech Analytics come in to keep up with the modern trends of today and empower your business to harvest data from many sources and make lightning fast decision in no time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab6'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon12}
                                            alt="Healthcare"
                                        />
                                        <h3>Public Sector</h3>
                                        <p>
                                            Crystallite’s Public Sector analytics combine your data to explore the insights on your industry and the deliverables of public sector that need to be highlighted. Our goal is to help the public sector outshine the rest.
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
                                    <option className='opt' value="tab1">Healthcare</option>
                                    <option className='opt' value="tab2">Financial Services</option>
                                    <option className='opt' value="tab3">Retail</option>
                                    <option className='opt' value="tab4">Manufacturing</option>
                                    <option className='opt' value="tab5">High Tech</option>
                                    <option className='opt' value="tab6">Public Sector</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon7}
                                            alt="Healthcare"
                                        />
                                        <h3>Healthcare</h3>
                                        <p>
                                            Connect with the endless possibilities that help you grow in the Healthcare industry as now you get to innovate with the help of Crystallite’s modern Healthcare Analytics. It empowers your establishment to quickly analyze available data and generate insights in real-time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="Healthcare"
                                        />
                                        <h3>Financial Services</h3>
                                        <p>
                                            Combat inconsistencies in with Crystallite’s state-of-the-art Financial Analytics. Drive accurate break-downs with insights in real-time of any data leaks or financial dissipation. This enables you to make informed decisions when it comes to deriving profitable outcomes.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon9}
                                            alt="Healthcare"
                                        />
                                        <h3>Retail</h3>
                                        <p>
                                            Transform the retail experience of your venture and your customers with Crystallite’s Retail Analytics. You retail operations are now faster, smarter, and more streamlined to yield customer-centric outcomes. This not only allows you to improve profitability but also maximize efficiency while empowering your customers.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon10}
                                            alt="Healthcare"
                                        />
                                        <h3>Manufacturing</h3>
                                        <p>
                                            We at Crystallite recognize that every second in the manufacturing industry is crucial as any bottlenecks or latency issues can set you back for a massive financial hit. This is where Crystallite comes in to transform the way that your business performs to serve the modern customers’ needs of today.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab5'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon11}
                                            alt="Healthcare"
                                        />
                                        <h3>High Tech</h3>
                                        <p>
                                            The world of tech has shifting dynamics that feature instant innovation and is fueled by the ability to respond quickly to changes. This is where Crystallite’s High-Tech Analytics come in to keep up with the modern trends of today and empower your business to harvest data from many sources and make lightning fast decision in no time.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab6'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon12}
                                            alt="Healthcare"
                                        />
                                        <h3>Public Sector</h3>
                                        <p>
                                            Crystallite’s Public Sector analytics combine your data to explore the insights on your industry and the deliverables of public sector that need to be highlighted. Our goal is to help the public sector outshine the rest.
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

export default BusinessServics