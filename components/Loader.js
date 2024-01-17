import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Loader.module.css";
//
import logo from '../public/images/logo.svg'

const Loader = () => {
    return (
        <>
            <section className={styles.loader}>
                <Image className={`${styles.logo} img-fluid`} src={logo} alt="logo" />
                <p>Crystallite Digital</p>
            </section>
        </>
    )
}

export default Loader
