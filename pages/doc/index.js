import React from 'react';
import { Button } from 'antd';
import CommonLayout from '../../components/Layout';

const Doc = () => {

    return (
        <>
            doc
            <Button>按钮</Button>
        </>
    );

};

export default Doc;

Doc.getLayout = (page) => {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}