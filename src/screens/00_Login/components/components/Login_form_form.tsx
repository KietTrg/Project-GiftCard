//node_modules
import { Button, Form, type FormProps, Input, Typography } from 'antd';
//components
//actions
//selector
//function
//constants
//styled
const Login_form_form = () => {
  type FieldType = {
    username?: string;
    password?: string;
  
  };
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
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
        <Button className='bg-gradient-to-l to-[#FFC120] from-[#F78E01] w-full border-none'htmlType="submit">
          <Typography.Text strong >Log In</Typography.Text>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login_form_form;



