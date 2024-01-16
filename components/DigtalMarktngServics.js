import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/DigiMarktngServics.module.css';
//
import icon1 from '../public/images/icons/seo.png'
import icon2 from '../public/images/icons/smm.png'
import icon3 from '../public/images/icons/proofreading.png'
import icon4 from '../public/images/icons/seo-1.png'
import icon5 from '../public/images/icons/smm-1.png'
import icon6 from '../public/images/icons/proofreading-1.png'


const DigtalMarktngServics = () => {

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
                    <Row className={`${styles.tabsRow} ${styles.deskTop}`}>
                        <Col md={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Digital_Marketing"
                                            />
                                            <h5>Search Engine Optimization</h5>
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
                                            <h5>Social Media Marketing</h5>
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
                                            <h5>Content Writing Services</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col md={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Search Engine <br />Optimization</h3>
                                        <p>
                                            Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.
                                        </p>
                                        <Link href="/seo">Read More</Link>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Social Media <br />Marketing</h3>
                                        <p>
                                            In today’s world, People don’t want to know what you are selling because a thousand others are doing that too. The audience wants much more than just products. They want Entertainment, Commitment, and Efforts. We know social media strategies should not just pitch your product because selling has become quite a negative word. So after deeply analyzing your business, our Social Media Management team comes up with Strategies and Engaging Content that develop a sense of honesty, care, and loyalty between you and your customers. Increasing ROI is not our plan rather, it is a part of the overall plan of building a relationship with your customers.
                                        </p>
                                        <Link href="/social-media-marketing">Read More</Link>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Content Writing Services</h3>
                                        <p>
                                            A simply written piece is far better than a complicated paragraph that only a few can understand. Crystallite has a team of well-versed and Creative Writers who can make your content look attractive to your audience. Whatever industry you work in, you need professional writers. Be it the Content on your Website, Blogs on Trending Topics, Descriptions for your products, or Content for Social Media Posts. Our writers can build everything from scratch using the relevant Keywords to rank your content higher in SEO results and drag quality traffic towards your website. Before writing anything, we deeply understand your Business, its Vision, Values and Goals, and Competitive Advantage. Blending all this information with the knowledge and skills of our writers we give your audience something worth reading.
                                        </p>
                                        <Link href="/content-writing-services">Read More</Link>
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
                                    <option className='opt' value="tab1">Search Engine Optimization</option>
                                    <option className='opt' value="tab2">Social Media Marketing</option>
                                    <option className='opt' value="tab3">Content Writing Services</option>
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
                                        <h3>Search Engine <br />Optimization</h3>
                                        <p>
                                            Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.
                                        </p>
                                        <Link href="/seo">Read More</Link>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Social Media <br />Marketing</h3>
                                        <p>
                                            In today’s world, People don’t want to know what you are selling because a thousand others are doing that too. The audience wants much more than just products. They want Entertainment, Commitment, and Efforts. We know social media strategies should not just pitch your product because selling has become quite a negative word. So after deeply analyzing your business, our Social Media Management team comes up with Strategies and Engaging Content that develop a sense of honesty, care, and loyalty between you and your customers. Increasing ROI is not our plan rather, it is a part of the overall plan of building a relationship with your customers.
                                        </p>
                                        <Link href="/social-media-marketing">Read More</Link>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Content Writing Services</h3>
                                        <p>
                                            A simply written piece is far better than a complicated paragraph that only a few can understand. Crystallite has a team of well-versed and Creative Writers who can make your content look attractive to your audience. Whatever industry you work in, you need professional writers. Be it the Content on your Website, Blogs on Trending Topics, Descriptions for your products, or Content for Social Media Posts. Our writers can build everything from scratch using the relevant Keywords to rank your content higher in SEO results and drag quality traffic towards your website. Before writing anything, we deeply understand your Business, its Vision, Values and Goals, and Competitive Advantage. Blending all this information with the knowledge and skills of our writers we give your audience something worth reading.
                                        </p>
                                        <Link href="/content-writing-services">Read More</Link>
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

export default DigtalMarktngServics