import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header, Sider, Content } = Layout;


const pathToMenu = [{
    pathname: "/",
    key: "1"
}, {
    pathname: "/doc",
    key: "2"
}]

const CommonLayout = ({ children }) => {

    const router = useRouter();

    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(pathToMenu.reduce((pre, cur) => {
        if (cur.pathname === router.pathname) {
            pre = [cur.key]
        }
        return pre
    }, []))

    const handleSelect = (item) => {
        setSelectedKeys(item.selectedKeys)
    }

    return (
        <Layout style={{ height: "100%" }}>
            <Sider trigger={null} collapsible breakpoint="lg" collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    onSelect={handleSelect}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link href="/"><a>首页</a></Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link href="/doc"><a>Doc</a></Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <Link href="/login"><a>登陆</a></Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background bgc-white"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );

};

export default CommonLayout;
