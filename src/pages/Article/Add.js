import React, { Component } from 'react';
import { PageHeader, Form, Input, Button, Cascader, Select, Space } from "antd";
import { cityOptions } from '@/utils/city'
import Editor from './components/Editor'
import PicturesWall from './components/PicturesWall'

class Add extends Component {
    state = {

    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onChange = value => {
        console.log(value);
    }

    render () {

        return (
            <div className="site-layout-background layout-container">
                <PageHeader className="site-page-header" title="添加文章" />
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        labelCol={{
                            span: 4,
                            offset: 7
                        }}
                        wrapperCol={{
                            span: 9,
                            offset: 7
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="标题"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="请输入标题" />
                        </Form.Item>

                        <Form.Item label="分类" name="category" rules={[{ required: true, message: 'Province is required' }]}>
                            <Select placeholder="选择类别">
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="店名"
                            name="storeName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your storeName!',
                                },
                            ]}
                        >
                            <Input placeholder="店名" />
                        </Form.Item>

                        <Form.Item
                            label="城市"
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your storeName!',
                                },
                            ]}
                        >
                            <Cascader
                                options={cityOptions} onChange={this.onChange} placeholder="选择城市" expandTrigger="hover"
                            />
                        </Form.Item>

                        <Form.Item name="address" label="详细地址" rules={[
                            {
                                required: true,
                                message: 'Please input your storeName!',
                            },
                        ]}>
                            <Input.TextArea placeholder="街道、门牌号" />
                        </Form.Item>


                        <Form.Item name="uploadImg" label="上传图片">
                            <PicturesWall />
                        </Form.Item>

                        <Form.Item name="content" label="内容" rules={[
                            {
                                required: true,
                                message: 'Please input your storeName!',
                            },
                        ]}>
                            <Editor />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 10,
                            }}
                        >
                            <Space size="middle">
                                <Button type="primary" htmlType="submit" className='btn-green'>
                                    提交
                                </Button>

                                <Button type="primary" className='btn-yellow'>
                                    存为草稿
                                </Button>
                            </Space>

                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Add;