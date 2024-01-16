import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";


const Contact = () => {

    const [formvalue, setFormvalue] = useState({ name: '', email: '', phone: '', message: '' });

    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name: formvalue.name, email: formvalue.email, phone: formvalue.phone, message: formvalue.message };

        const res = await axios.post("http://localhost/reactcrudphp/api/user.php", formData);

    };

    return (
        <>
            <section className={`${styles.contact} scroll scroll-contact`} data-section-name="scroll-contact">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.contactContent}>
                                <h2>Let's Get <br /> <span>Started</span></h2>
                                <p>Some of the greatest things in life start with a <br /> simple conversation. We welcome you to call, <br /> email, or simply use the magic form to the right.</p>
                                <div className={styles.infoLinks}>
                                    <Link href="mailto:info@crystal-lite.net">
                                        <FaEnvelope className={styles.icon} />
                                        info@crystal-lite.net
                                    </Link>
                                </div>
                                <div className={styles.infoLinks}>
                                    <Link href="mailto:hr@crystal-lite.net">
                                        <FaEnvelope className={styles.icon} />
                                        hr@crystal-lite.net
                                    </Link>
                                </div>
                                <div className={styles.infoLinks}>
                                    <Link href="tel:021-111 22 55 77">
                                        <FaPhoneAlt className={styles.icon} />
                                        021-111 22 55 77
                                    </Link>
                                </div>
                                <div className={`${styles.infoLinks} ${styles.address}`}>
                                    <Link href="https://goo.gl/maps/Vd2oB7YVTJQNJpNM6" target={'_blank'}>
                                        <FaBuilding className={`${styles.icon}`} />
                                        1210,1212 , National IT Park, Main Shahrah-e-Faisal, 74200, Karachi-Pakistan.
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form className={styles.contactForm} onSubmit={handleSubmit} method="POST">
                                <Row>
                                    <Col xl={12} className='mt-3'>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            value={formvalue.name}
                                            onChange={handleInput}
                                        />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            value={formvalue.email}
                                            onChange={handleInput}
                                        />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone"
                                            maxLength="10"
                                            required
                                            value={formvalue.phone}
                                            onChange={handleInput}
                                        />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            required
                                            value={formvalue.message}
                                            onChange={handleInput}>
                                        </textarea>
                                    </Col>
                                    <Col xl={12} className='mt-4'>
                                        <button type="submit" className='primary-btn'>Submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
