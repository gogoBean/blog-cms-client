import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import Top from '../../components/Top'
import MenuBar from '../../components/MenuBar'
import UserMgr from '@/pages/UserMgr'
import ArticleMgr from '@/pages/Article'
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
        const {match}=this.props
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
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Switch>
                        <Route path={`${match.path}/usermgr`} component={UserMgr}></Route>
                        <Route path={`${match.path}/articlemgr`} component={ArticleMgr}></Route>
                        <Route render={()=><h3>欢迎访问CMS后台管理系统</h3>}></Route>
                    </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Home