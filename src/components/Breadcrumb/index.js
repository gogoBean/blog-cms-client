import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const routes = {
    '/usermgr': '用户管理',
    '/article': '文章管理',
    '/article/add': '添加文章',
    '/article/edit': '编辑文章',
}


class index extends Component {
    itemRender = () => {
        const parentPath = this.props.match.path
        const childPath = this.props.location.pathname
        const itemList = []
        if (parentPath === childPath) {
            // 一级页面
            itemList.push({
                breadcrumbName: routes[parentPath],
            })

        } else {
            itemList.push({
                path: parentPath,
                breadcrumbName: routes[parentPath],
            })
            itemList.push({
                breadcrumbName: routes[parentPath],
            })
        }
        return itemList
    }

    render () {
        const breadcrumbList = this.itemRender()
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                    breadcrumbList.map((item, index) => {
                        if (item.path) {
                            return (<Breadcrumb.Item key={item.breadcrumbName}>
                                <Link to={item.path}>{item.breadcrumbName}</Link>
                            </Breadcrumb.Item>)
                        } else {
                            return (<Breadcrumb.Item key={item.breadcrumbName}>{item.breadcrumbName}</Breadcrumb.Item>)
                        }
                    })
                }
            </Breadcrumb>
            
        );
    }

}

export default index;