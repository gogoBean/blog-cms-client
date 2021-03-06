import React, { Component, Fragment } from 'react'
import { Space } from 'antd';
import Avatar from './AvatarDropdown';
import NoticeIcon from './NoticeIcon';
import styles from './index.module.less';

class Top extends Component {
    render () {
        return (
            // <div className="my-side-bar">
            //     {/* 头部左侧区域 */}
            //     <div className="logo-wrap">
            //         <a href='/'>
            //             <h1 style={{ color: '#fff', fontSize: '30px' }}>
            //                  <SmileOutlined />
            //                 &nbsp;CMS后台管理系统
            //             </h1>
            //         </a>
            //     </div>
            //     {/* 头部区域的右侧布局 */}
            //     <div className="user-wrap">
            //         <div className="btn-group">
            //             <UserOutlined />
            //             用户
            //         </div>
            //         <div className="btn-group">
            //         <LogoutOutlined />
            //             退出
            //         </div>
            //     </div>
            // </div>
            <Space className={styles.right}>
                <NoticeIcon />
                <Avatar />
            </Space>

        )
    }
}
export default Top