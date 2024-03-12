
// import React from 'react'

// const Login_form_form = () => {
//   return (
//     <div>login_form_form</div>
//   )
// }

// export default Login_form_form

import React from 'react';
import { Button, Checkbox, Form, type FormProps, Input, Typography } from 'antd';

type FieldType = {
  username?: string;
  password?: string;

};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login_form_form = () => (
  <Form
  className='w-[400px] xs:w-full'
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>

      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder='User name or email' />
    </Form.Item>

    <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      
    >
      <Input.Password placeholder='Password'/>
    </Form.Item>
    <Form.Item>
      <Button style={{width:'100%', background:'#F78E01'}} type='text' htmlType="submit">
        <Typography.Text strong>Log In</Typography.Text>
      </Button>
    </Form.Item>
  </Form>
);

export default Login_form_form;