import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'


export default function LoginForm({ onFinish, onFinishFailed }) {


  return (
    <>
      <Form
        name="Login Form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size='large'
      >
        <Form.Item
          // label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
        <Link to='/forgot-password'>Forgot Password ?</Link>
      </Form>
    </>

  )
}
