import React, { Component } from 'react'
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { Alert } from 'antd';
import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Footer from './components/Footer'
import './index.less'

const LoginMessage = ({ content }) => (
    <Alert
        style={{
            marginBottom: 24,
        }}
        message={content}
        type="error"
        showIcon
    />
);

class Login extends Component {
    state = {
        status: 'normal'
    }



    handleSubmit = async (values) => {
        console.log(values)
    }
    render () {
        return (
            <div className="login-container">
                <div className="login-content">
                    <LoginForm
                        title="Ant Design"
                        subTitle="subTitle"
                        initialValues={{
                            autoLogin: true,
                        }}
                        onFinish={async (values) => {
                            await this.handleSubmit(values);
                        }}
                    >

                        {this.status === 'error' && (
                            <LoginMessage
                                content="账户或密码错误(admin/ant.design)"
                            />
                        )}

                        {this.status === 'error' && <LoginMessage content="验证码错误" />}

                        <div>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className="prefixIcon" />,
                                }}
                                placeholder="用户名: admin or user"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                }}
                                placeholder="密码: ant.design"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                ]}
                            />
                        </div>


                        {/* <div
                style={{
                  marginBottom: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
                </ProFormCheckbox>
                <a
                  style={{
                    float: 'right',
                  }}
                >
                  <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
                </a>
              </div> */}
                    </LoginForm>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Login