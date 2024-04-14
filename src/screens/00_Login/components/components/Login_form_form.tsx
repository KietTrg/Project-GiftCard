//node_modules
import { Form, type FormProps, Input, Button } from 'antd';
//components
//actions
import { useAuth } from '../../../../context/authContext';
//selector
//function
//constants
//styled

type FieldType = {
  username?: string;
  password?: string;

};
const LoginFormForm = () => {
  // -------------------------- VAR ---------------------------
  const { loginUser } = useAuth()
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    loginUser({ username: values.username as string, password: values.password as string })
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
        <Input.Password placeholder='Password' />
      </Form.Item>
      <Form.Item>
        <Button style={{ background: "linear-gradient(96deg, rgb(250, 148, 6) 6.19%, rgb(254, 188, 29) 97.63%)", border: 'none', width: '100%' }} htmlType='submit' type='primary'>Log In</Button>
      </Form.Item>
    </Form>
  );
};
export default LoginFormForm;



