import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/SmmServices.module.css';
//
import icon1 from '../public/images/icons/seo.png'
import icon2 from '../public/images/icons/smm.png'
import icon3 from '../public/images/icons/proofreading.png'
import icon4 from '../public/images/icons/seo-1.png'
import icon5 from '../public/images/icons/smm-1.png'
import icon6 from '../public/images/icons/proofreading-1.png'
import icon7 from '../public/images/icons/sector.png'
import icon8 from '../public/images/icons/sector-1.png'


const SmmServices = () => {


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
            <section className={`${styles.digiService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.dedhostingRow}>
                        <Col lg={10} className='mx-auto'>
                            <div className={styles.dedhostingBody}>
                                <h2>Social Media Advertising Services That Grows Your Business</h2>
                                <p>
                                    Business Boost? Watch Us Doing Social Media Ad Campaign. Rest Assured, Working With Us Guarantees You More Clients For Your Business!
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.tabsRow} ${styles.deskTop}`}>
                        <Col lg={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Digital_Marketing"
                                            />
                                            <h5>Facebook Advertising <br /> Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon2}
                                                alt="Telecommunication"
                                            />
                                            <h5>Youtube Advertising <br /> Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="IT"
                                            />
                                            <h5>Instagram Advertising <br /> Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="IT"
                                            />
                                            <h5>Twitter Advertising <br /> Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col lg={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Facebook Advertising <br /> Services</h3>
                                        <p>
                                            If you seek professional Facebook Advertising Services, you have come to the right
                                            place.We will help you reach your targeted audience using the most sought-after
                                            social media platform.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Youtube Advertising <br /> Services</h3>
                                        <p>
                                            If your target audience is present on YouTube, then our experts cash bring you
                                            closer to your visual marketing goal. We bring you subscriptions, likes, and shares
                                            on your videos or channels with carefully targeted captions and tags.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Instagram Advertising <br /> Services</h3>
                                        <p>
                                            Instagram is home to billions of active users scrolling through news feeds every
                                            day. We bring your brand closer to your audience with Instagram availability with
                                            thousands of daily views and interactions with potential customers.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>Twitter Advertising <br /> Services</h3>
                                        <p>
                                            Our team of professional in-house Twitter marketing experts, media strategists, and
                                            content creators drive attention by building brand awareness, influencer relations,
                                            and follower engagement.
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
                                    <option className='opt' value="tab1">Facebook Advertising Services</option>
                                    <option className='opt' value="tab2">Youtube Advertising Services</option>
                                    <option className='opt' value="tab3">Instagram Advertising Services</option>
                                    <option className='opt' value="tab4">Twitter Advertising Services</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Facebook Advertising <br /> Services</h3>
                                        <p>
                                            If you seek professional Facebook Advertising Services, you have come to the right
                                            place.We will help you reach your targeted audience using the most sought-after
                                            social media platform.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Youtube Advertising <br /> Services</h3>
                                        <p>
                                            If your target audience is present on YouTube, then our experts cash bring you
                                            closer to your visual marketing goal. We bring you subscriptions, likes, and shares
                                            on your videos or channels with carefully targeted captions and tags.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Instagram Advertising <br /> Services</h3>
                                        <p>
                                            Instagram is home to billions of active users scrolling through news feeds every
                                            day. We bring your brand closer to your audience with Instagram availability with
                                            thousands of daily views and interactions with potential customers.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>Twitter Advertising <br /> Services</h3>
                                        <p>
                                            Our team of professional in-house Twitter marketing experts, media strategists, and
                                            content creators drive attention by building brand awareness, influencer relations,
                                            and follower engagement.
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

export default SmmServices