import React, { Component } from 'react'
import { Layout } from 'antd'
import Top from '../../components/Top'
import MenuBar from '../../components/MenuBar'
import Breadcrumb from '@/components/Breadcrumb'

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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <MenuBar {...this.props}></MenuBar>
                </Sider>
                <Layout className="site-layout">
                    <Header className={`my-header site-layout-background`} >
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Top></Top>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb {...this.props} />
                        <div className="site-layout-background layout-container">
                        {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Home