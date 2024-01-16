import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/SmmServices.module.css';
//
import icon1 from '../public/images/icons/proofreading.png'
import icon2 from '../public/images/icons/linkbuild.png'
import icon3 from '../public/images/icons/onpage.png'
import icon4 from '../public/images/icons/proofreading-1.png'
import icon5 from '../public/images/icons/linkbuild-1.png'
import icon6 from '../public/images/icons/onpage-1.png'
import icon7 from '../public/images/icons/offpage.png'
import icon8 from '../public/images/icons/offpage-1.png'


const CwsServices = () => {

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
                                <h2>Our Content writing Services</h2>
                                <p>
                                    Increase Your Search Rankings and Get Discovered More Online With The Best SEO Agency Ever!
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
                                            <h5>Custom Content</h5>
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
                                            <h5>eBooks</h5>
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
                                            <h5>Blog Posts</h5>
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
                                            <h5>SEO Content</h5>
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
                                        <h3>Custom Content</h3>
                                        <p>
                                            n nearly every content marketing strategy, the need arises for custom copy that doesn’t clearly fall into the purview of traditional article writing services. But if it’s content, and it needs writing, our expert writers can and will do it:
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>eBooks</h3>
                                        <p>
                                            A Crystallite eBook is the perfect intersection of our editorial and graphic design teams. These visual assets are beautifully designed to capture attention, but can be written with the same level of expertise and authority as a white paper.
                                        </p>
                                        <p className='mt-3'>
                                            Every eBook we make has just enough text on each page to get a point across without overwhelming the reader. This makes it possible to incorporate design elements that complement the written content, but it also means every word really has to count. Not a phrase out of place.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Blog Posts</h3>
                                        <p>
                                            Most B2B and B2C content marketers agree: Blog content is the most effective type of web content writing for building brand awareness. But when a new blog post is published every 0.5 seconds, “good enough” won’t make the cut.
                                        </p>
                                        <p className='mt-3'>
                                            The difference between good content and great content is a team of talented writers armed with data from Google Analytics, SEMrush and other platforms. SEO content writing makes your blogs easy to find so your target audience lands on your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>SEO Content</h3>
                                        <p>
                                            Content for search engine optimization is the outcome of masterful scribes taking insights from content marketing strategists and weaving them into content that is on-brand, on-point and, eventually, on Page 1.
                                        </p>
                                        <p className='mt-3'>
                                            There’s a lot of online content out there and strategically worded blog posts and landing pages can help your target audience navigate to find your company. Our writers work closely with our CMS team to discover which keywords will get you the best results.
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
                                    <option className='opt' value="tab1">Custom Content</option>
                                    <option className='opt' value="tab2">eBooks</option>
                                    <option className='opt' value="tab3">Blog Posts</option>
                                    <option className='opt' value="tab4">SEO Content</option>
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
                                        <h3>Custom Content</h3>
                                        <p>
                                            n nearly every content marketing strategy, the need arises for custom copy that doesn’t clearly fall into the purview of traditional article writing services. But if it’s content, and it needs writing, our expert writers can and will do it:
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>eBooks</h3>
                                        <p>
                                            A Crystallite eBook is the perfect intersection of our editorial and graphic design teams. These visual assets are beautifully designed to capture attention, but can be written with the same level of expertise and authority as a white paper.
                                        </p>
                                        <p className='mt-3'>
                                            Every eBook we make has just enough text on each page to get a point across without overwhelming the reader. This makes it possible to incorporate design elements that complement the written content, but it also means every word really has to count. Not a phrase out of place.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Blog Posts</h3>
                                        <p>
                                            Most B2B and B2C content marketers agree: Blog content is the most effective type of web content writing for building brand awareness. But when a new blog post is published every 0.5 seconds, “good enough” won’t make the cut.
                                        </p>
                                        <p className='mt-3'>
                                            The difference between good content and great content is a team of talented writers armed with data from Google Analytics, SEMrush and other platforms. SEO content writing makes your blogs easy to find so your target audience lands on your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>SEO Content</h3>
                                        <p>
                                            Content for search engine optimization is the outcome of masterful scribes taking insights from content marketing strategists and weaving them into content that is on-brand, on-point and, eventually, on Page 1.
                                        </p>
                                        <p className='mt-3'>
                                            There’s a lot of online content out there and strategically worded blog posts and landing pages can help your target audience navigate to find your company. Our writers work closely with our CMS team to discover which keywords will get you the best results.
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

export default CwsServices