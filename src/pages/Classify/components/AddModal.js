import React, { Component } from 'react';
import { Modal, Form, Input, Cascader, Typography } from 'antd';
const { Text } = Typography;
const catOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

class AddModal extends Component {
    render () {
        return (
            <Modal
                title="添加分类"
                visible={this.props.visible}
                onOk={() => this.props.closeAddModal('ok')}
                confirmLoading={this.props.confirmLoading}
                onCancel={() => this.props.closeAddModal('cancel')}
                width={576}
                maskClosable={false}
            >
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="分类名称"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="分类名称" />
                        </Form.Item>
                        <Form.Item
                            label="选择分类"
                            name="classify"
                        >
                            <Cascader
                                options={catOptions} onChange={this.onChange} placeholder="选择分类" expandTrigger="hover"
                            />
                        </Form.Item>

                    </Form>
                    <Text type="secondary">不选择分类则默认为创建一级分类</Text>
                </div>
            </Modal>
        );
    }
}

export default AddModal;