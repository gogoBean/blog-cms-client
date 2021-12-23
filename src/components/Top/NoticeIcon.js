import React, { Component } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import styles from './NoticeIcon.module.less';

class NoticeIcon extends Component {
    state = {
        count: 3
    }
    render () {
        return (
            <span className={`${styles.noticeButton}`}>
                <Badge
                count={this.state.count}
                style={{
                    boxShadow: 'none',
                }}
                className={styles.badge}
            >
                <BellOutlined className={styles.icon} />
            </Badge>
            </span>
            
        );
    }
}

export default NoticeIcon;