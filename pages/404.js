import React from 'react';
import Link from 'next/link'
// import _ from 'lodash';

const NotFound = () => {

    return (
        <>
            页面不存在
            <Link href={{ pathname: '/' }}>
                <a>回到首页</a>
            </Link>
        </>
    );

};

export default NotFound;
