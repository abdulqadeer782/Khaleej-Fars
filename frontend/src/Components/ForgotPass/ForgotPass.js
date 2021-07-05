import { Col, Row,Layout, Divider } from 'antd'
import React from 'react'
import ForgotPassForm from './ForgotPassForm'

export default function LoginPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Layout id='AuthBack'>
            <Row justify='center'>
                <Col sm={22} xs={22} md={10} lg={10} className='login-content'>
                    {/* <UserOutlined style={{display:'flex',justifyContent:'center',fontSize:'70px'}}/> */}
                    {/* <h3 align='center'>Login</h3> */}
                    <Divider />
                    <ForgotPassForm onFinish={onFinish} onFinishFailed={onFinishFailed}/>
                    <Divider />
                </Col>
            </Row>
        </Layout>
    )
}
