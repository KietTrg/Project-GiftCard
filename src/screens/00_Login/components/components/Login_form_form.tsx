//node_modules
import { Form, type FormProps, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/authContext';
import { useContext } from 'react';
import { apiUserLogin } from '../../../../api';
import { useDispatch } from 'react-redux';
import { getCurrent, loginUser } from '../../../../stores/reducers/user_reducer';
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
const LoginFormForm = () => {
  // -------------------------- VAR ---------------------------
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { login } = useContext(AuthContext)
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const rs = await apiUserLogin({ username: values.username as string, password: values.password as string })


    if (rs.statusCode === 201) {
      dispatch(loginUser({
        accessToken: rs.data.accessToken
      }))
      dispatch(getCurrent())
    }

    // if (values.username === 'admin' && values.password === 'admin') {
    //   login({ username: values?.username as string, password: values?.password as string })
    //   navigate('/admin')
    // } else {
    //   login({ username: values?.username as string, password: values?.password as string })
    //   navigate('/')
    // }
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



