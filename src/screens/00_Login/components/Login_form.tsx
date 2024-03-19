//node_modules
import { Flex } from 'antd'
//components
import LoginFormTitle from './components/Login_form_title'
import LoginFormForm from './components/Login_form_form'
//actions
//selector
//function
//constants
//styled
const LoginForm = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Flex className="md:h-[100vh]" vertical justify='center' align='center' gap='20px'>
      <LoginFormTitle />
      <LoginFormForm />
    </Flex>
  )
}

export default LoginForm