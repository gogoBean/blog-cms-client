import React, { Component } from 'react'
import { Avatar, Menu } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.less';

class AvatarDropdown extends Component {
    menuRender = () => (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
    )
    render () {
        return (
            <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
                    <span className={`${styles.name} anticon`}>{currentUser.name}</span>
                </span>
            </Dropdown>
        )
    }
}
export default AvatarDropdown