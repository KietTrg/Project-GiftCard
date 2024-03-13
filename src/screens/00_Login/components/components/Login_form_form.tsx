//node_modules
import { Button, Form, type FormProps, Input, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//components
//actions
//selector
//function
//constants
//styled
type FieldType = {
  username?: string;
  password?: string;

};
const Login_form_form = () => {
  // -------------------------- VAR ---------------------------
  const navigate = useNavigate()
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
    if(values){
      navigate('/')
    }
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
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
        <button className='p-2 rounded-md bg-gradient-to-l to-[#FFC120] from-[#F78E01] w-full border-none'type="submit">
          <Typography.Text strong >Log In</Typography.Text>
        </button>
      </Form.Item>
    </Form>
  );
};
export default Login_form_form;



