//node_modules
import { Flex } from 'antd'
//components
import Login_form_form from './components/Login_form_form'
import Login_form_title from './components/Login_form_title'
//actions
//selector
//function
//constants
//styled
type Props ={
  isLogin: boolean;
  setIsLogin?: () => boolean
}
const Login_form = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Flex className="md:h-[100vh]" vertical justify='center' align='center' gap='20px'>
      <Login_form_title/>
      <Login_form_form/>
    </Flex>
  )
}

export default Login_form