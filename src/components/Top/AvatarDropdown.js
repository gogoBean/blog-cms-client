import React, { Component } from 'react'
import { Avatar, Menu, Dropdown } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
// import styles from './index.less';
import avatarImg from '@/assets/img/avatar.png';
import styles from './index.module.less';
class AvatarDropdown extends Component {

    onMenuClick = ({ key }) => {
        console.log(`Click on item ${key}`);
    };

    menuRender = () => (
    <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
      <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
       <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
    )
    render () {
        return (
            <Dropdown overlay={this.menuRender}>
                <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className={styles.avatar} src={avatarImg} alt="avatar" />
                    <span className={`${styles.name} anticon`}>currentUser</span>
                </span>
            </Dropdown>
        )
    }
}
export default AvatarDropdown