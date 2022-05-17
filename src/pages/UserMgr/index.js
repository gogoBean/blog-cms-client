import React, { Component } from "react";
import { PageHeader, List, Avatar, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { login } from '@/api/user'
const { Search } = Input;

const ListContent = ({ data: { owner, createdAt, percent, status } }) => (
  <div className={styles.listContent}>
    <div className={styles.listContentItem}>
      <span>Owner</span>
      <p>{owner}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>开始时间</span>
      <p>2021-12-30 16:25</p>
    </div>
    <div className={styles.listContentItem}>listContentItem</div>
  </div>
);

class index extends Component {
  state = {
    loading: false,
    list: [
      {
        logo: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
        href: "www.baidu.com",
        title: "那是一种内在的东西， 他们到达不了，也无法触及的",
        subDescription: "描述描述",
        owner: "vue",
      },
      {
        logo: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
        href: "www.baidu.com",
        title: "is title",
        subDescription: "描述描述",
        owner: "vue",
      },
      {
        logo: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
        href: "www.baidu.com",
        title: "is title",
        subDescription: "描述描述",
        owner: "vue",
      },
    ],
  };

  componentDidMount() {
    login().then(res=> {
      console.log('res', res)
    })
  }

  render() {
    return (
      <div>
        <PageHeader className="site-page-header" title="用户列表" />
        <div className={styles.searchBar}>
          <Search
            className={styles.extraContentSearch}
            placeholder="请输入"
            onSearch={() => ({})}
          />
        </div>
        <div>
          <Button
            type="dashed"
            onClick={() => {
              console.log("add");
            }}
            style={{
              width: "100%",
              marginBottom: 8,
            }}
          >
            <PlusOutlined />
            添加
          </Button>
          <List
            size="large"
            rowKey="id"
            loading={false}
            pagination={true}
            dataSource={this.state.list}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button key="edit" type="link" style={{ padding: 0 }}>
                  编辑
                </Button>,
                  <Button key="delete" type="link" style={{ padding: 0 }}>
                  删除
                </Button>
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.logo} shape="square" size="large" />
                  }
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.subDescription}
                />
                <ListContent data={item} />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default index;
