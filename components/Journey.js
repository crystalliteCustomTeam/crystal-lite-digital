import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Journey.module.css';
//
import journeyImg from '../public/images/banners/journey_bg.svg'


const Journey = () => {
    return (
        <>
            <section className={`${styles.journey} scroll scroll-journey`} data-section-name="scroll-journey">
                <Image className="img-fluid"
                src={journeyImg}
                alt="journeyImg"
                />
            </section>
        </>
    )
}

export default Journey