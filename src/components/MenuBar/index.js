import React, { Component } from 'react'
import { Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.less'

const { SubMenu } = Menu;

class MenuBar extends Component {
    state = {
        current: '',
        perMenu: [], // 当前登录用户所具有的菜单类型的权限
        collapsed: false,
    }

    handleMenuClick=e=>{
        // this.setState({current:e.key})
        this.props.history.push(e.key)
        // let url=this.state.perMenu.find(item=>item.id===parseInt(e.key)).actionUrl;
        // this.props.history.push(url);
    }

    render () {
        console.log(this.props)
        const currentPath = this.props.match.path

        return (
            <div className="my-side-bar">
                <div className="logo" />
                <Menu onClick={this.handleMenuClick} theme="dark" 
                selectedKeys={[currentPath]}
                 mode="inline">
                    <Menu.Item key="/usermgr" icon={<UserOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="/article" icon={<FileOutlined />}>
                        文章管理
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<PieChartOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<DesktopOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default MenuBar