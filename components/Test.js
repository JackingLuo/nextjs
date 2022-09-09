import React, { useEffect } from 'react';
import { GET_TEST_INFO } from '../http/api';
// import _ from 'lodash';

const Test = () => {

    useEffect(() => {
        GET_TEST_INFO({ a: 123 }).then(res => {
            console.log('%c res 👉 ', 'font-size:16px;background-color:#fff;color:#000;', res);
        })
    }, []);

    return (
        <>
            test组件
        </>
    );

};

export default Test;
