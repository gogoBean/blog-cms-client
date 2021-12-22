import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import Top from '../../components/Top'
import MenuBar from '../../components/MenuBar'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
import './index.less'
const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render () {
        return (
            // <Layout style={{ minHeight: '100vh' }}>
            //     <Header style={{ color: '#fff', padding: '0' }}>
            //         <Top></Top>
            //     </Header>
            //     <Layout>
            //         <Sider style={{ backgroundColor: 'silver' }}>左侧区域</Sider>
            //         <Content>内容区域</Content>
            //     </Layout>
            //     <Footer style={{ backgroundColor: 'silver' }}>
            //         底部区域
            //     </Footer>

            // </Layout>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <MenuBar></MenuBar>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Home