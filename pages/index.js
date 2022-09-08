import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

function Home(props) {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <>
            <Head>
                <title>Next app</title>
                <meta name="description" content="desc:什么的" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <img src="/images/nextjs-logo.png" className={styles.img} />
            <p className="test">首页</p>
        </>
    );
}

export default Home;
