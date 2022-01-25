import React, { Component } from "react";
import { PageHeader, Table, Tag, Space, Button, Input, Tooltip } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
const { Search } = Input;

class index extends Component {
  state = {
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  };

  columnsRender = () => [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Button type="link" style={{ padding: 0 }}>
          {text}
        </Button>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" style={{ padding: 0 }}>
            详情
          </Button>
        </Space>
      ),
    },
  ];

  render() {
    return (
      <div className="site-layout-background layout-container">
        <PageHeader className="site-page-header" title="文章列表" />
        <div className={styles.toolBar}>
          <Space size="middle">
            <Button
              type="primary"
              key="primary"
              onClick={() => {
                this.props.history.push('/article/add')
              }}
            >
              <PlusOutlined /> 新建
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined className="icon-hover" />
            </Tooltip>

            <Search
              className={styles.extraContentSearch}
              placeholder="请输入"
              onSearch={() => ({})}
            />
          </Space>
        </div>
        <div>
          <Table columns={this.columnsRender()} dataSource={this.state.data} />
        </div>
      </div>
    );
  }
}

export default index;
