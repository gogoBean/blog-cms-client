import React, { Component } from 'react';
import { PageHeader, Table, Space, Button, Tooltip } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import AddModal from './components/AddModal'

class index extends Component {
    state = {
        data: [
            {
                key: 1,
                name: 'John Brown sr.',
                age: 60,
                address: 'New York No. 1 Lake Park',
                children: [
                    {
                        key: 11,
                        name: 'John Brown',
                        age: 42,
                        address: 'New York No. 2 Lake Park',
                    },
                    {
                        key: 12,
                        name: 'John Brown jr.',
                        age: 30,
                        address: 'New York No. 3 Lake Park',
                    },
                    {
                        key: 13,
                        name: 'Jim Green sr.',
                        age: 72,
                        address: 'London No. 1 Lake Park',
                    },
                ],
            },
            {
                key: 2,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                children: [
                    {
                        key: 101,
                        name: 'John Brown',
                        age: 42,
                        address: 'New York No. 2 Lake Park',
                    },
                    {
                        key: 102,
                        name: 'John Brown jr.',
                        age: 30,
                        address: 'New York No. 3 Lake Park',
                    },
                ],
            },
            {
                key: 3,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ],
        addModalVisible: false,
        addModalLoading: false 
    }

    closeAddModal = (status) => {
        if (status === 'cancel') return this.setState({addModalVisible: false, addModalLoading: false})
        // ok
        this.setState({addModalLoading: true})
        setTimeout(() => {
          console.log('ajax 完成')
          this.setState({addModalVisible: false, addModalLoading: false})
        }, 2000);
    }


    columnsRender = () => [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" style={{ padding: 0 }}>
                        编辑
                    </Button>
                    <Button type="link" danger style={{ padding: 0 }}>
                        删除
                    </Button>
                </Space>
            ),
        },
    ]

    render () {
        return (
            <div>
                <PageHeader className="site-page-header" title="分类列表" />
                <div className={styles.toolBar}>
                    <Space size="middle">
                        <Button
                            type="primary"
                            key="primary"
                            onClick={() => {
                                this.setState({addModalVisible: true})
                            }}
                        >
                            <PlusOutlined /> 新建
                        </Button>
                        <Tooltip title="刷新">
                            <ReloadOutlined className="icon-hover" />
                        </Tooltip>
                    </Space>
                </div>
                <div>
                    <Table
                        columns={this.columnsRender()}
                        dataSource={this.state.data}
                    />
                </div>
                <AddModal visible={this.state.addModalVisible} confirmLoading={this.state.addModalLoading} closeAddModal={this.closeAddModal} />
            </div>
        );
    }
}

export default index;