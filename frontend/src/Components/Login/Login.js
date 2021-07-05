import { UserOutlined } from '@ant-design/icons';
import { Col, Row, Layout, Divider } from 'antd'
import React from 'react'
import { useHistory } from 'react-router';
import LoginForm from './loginForm'

export default function LoginPage() {
    const history = useHistory()
    const onFinish = (values) => {
        console.log('Success:', values);
        sessionStorage.setItem('token', 565)
        history.push('/')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout id='AuthBack'>
            <Row justify='center'>
                <Col sm={22} xs={22} md={10} lg={10} className='login-content'>
                    <UserOutlined style={{display:'flex',justifyContent:'center',fontSize:'70px'}}/>
                    {/* <h3 align='center'>Login</h3> */}
                    <Divider />
                    <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed}/>
                    <Divider />
                </Col>
            </Row>
        </Layout>
    )
}
