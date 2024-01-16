import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/TranscriptionServics.module.css';
//
import icon1 from '../public/images/icons/transcription.png'
import icon2 from '../public/images/icons/editing.png'
import icon3 from '../public/images/icons/proofreading.png'
import icon4 from '../public/images/icons/transcription-1.png'
import icon5 from '../public/images/icons/editing-1.png'
import icon6 from '../public/images/icons/proofreading-1.png'


const TranscriptionServics = () => {

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
            <section className={`${styles.transService} scroll scroll-service`} data-section-name="scroll-service">
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
                                            <h5>TRANSCRIPTION</h5>
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
                                            <h5>EDITING</h5>
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
                                            <h5>PROOFREADING</h5>
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
                                        <h3>TRANSCRIPTION</h3>
                                        <p>
                                            Transcriber Hub is home to  our skilled team of transcriptionists who are equipped with the analytical acumen to provide the highest quality in the lowest fraction of time. This not only ensures our timely delivery but has enabled us to develop a customer base of more than 10,000 satisfied customers and around 5 million mins of transcriptions processed.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>EDITING</h3>
                                        <p>
                                            The tri-edit approach is where three of our editors audit the document that you have submitted with reference to the smallest of details whether it’s a grammatical issue in terms of spelling or any redundant words that could be removed to complement the clarity of speech. Whether its book drafts or you need baseline editing services, simply get in touch with our experts today!
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>PROOFREADING</h3>
                                        <p>
                                            The writer might overlook certain details while writing a manuscript, report, or even a book but this is where Transcriber Hub’s proofreading skills come into play. We not only proofread your piece but also provide a track report of the changes that have been made. This helps you identify the said changes and also enables you to revert those changes if you wish to head back to the content’s original state.
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
                                    <option className='opt' value="tab1">TRANSCRIPTION</option>
                                    <option className='opt' value="tab2">EDITING</option>
                                    <option className='opt' value="tab3">PROOFREADING</option>
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
                                        <h3>TRANSCRIPTION</h3>
                                        <p>
                                            Transcriber Hub is home to  our skilled team of transcriptionists who are equipped with the analytical acumen to provide the highest quality in the lowest fraction of time. This not only ensures our timely delivery but has enabled us to develop a customer base of more than 10,000 satisfied customers and around 5 million mins of transcriptions processed.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>EDITING</h3>
                                        <p>
                                            The tri-edit approach is where three of our editors audit the document that you have submitted with reference to the smallest of details whether it’s a grammatical issue in terms of spelling or any redundant words that could be removed to complement the clarity of speech. Whether its book drafts or you need baseline editing services, simply get in touch with our experts today!
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>PROOFREADING</h3>
                                        <p>
                                            The writer might overlook certain details while writing a manuscript, report, or even a book but this is where Transcriber Hub’s proofreading skills come into play. We not only proofread your piece but also provide a track report of the changes that have been made. This helps you identify the said changes and also enables you to revert those changes if you wish to head back to the content’s original state.
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

export default TranscriptionServics