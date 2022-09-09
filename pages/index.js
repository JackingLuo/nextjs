import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { GET_TEST_INFO } from '../http/api';
import Test from '../components/Test';

export default function Home({ data }) {

    console.log('%c data 👉 ', 'font-size:16px;background-color:#fff;color:#000;', data);

    return (
        <>
            <Head>
                <title>Next app</title>
                <meta name="description" content="desc:什么的" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <img src="/images/nextjs-logo.png" className={styles.img} />
            <p className="test">首页</p>
            <Test />
        </>
    );
}

export async function getServerSideProps() {
    const data = await GET_TEST_INFO();
    if (!data) {
        notFound: true
    }
    return {
        props: {
            data: data
        }
    }
}
