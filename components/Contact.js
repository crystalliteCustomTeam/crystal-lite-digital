import React, { useEffect, useState } from 'react'
import Axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";


const Contact = () => {

    const [ip, setIP] = useState('');
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])


    const [score, setScore] = useState('Submit');


    const router = useRouter();
    const currentRoute = router.pathname;
    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('api/emailapi/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })



        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Crystallite",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }


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
                            <form className={styles.contactForm} id="contactusform1" onSubmit={handleSubmit}>
                                <Row>
                                    <Col xl={12} className='mt-3'>
                                        <input type="text" name="name" id="name" placeholder="Full Name" required />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input type="tel" minLength="7" maxLength="15" pattern="[0-9]*" name="phone" id="phone" placeholder="Phone" required />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <textarea type="textarea" name="message" id="messages" placeholder="Message" required />
                                    </Col>
                                    <Col xl={12} className='mt-4'>
                                        <button value={score} id="savebtns" type="submit" className='primary-btn'>{score}</button>
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
