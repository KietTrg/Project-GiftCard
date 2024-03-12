
import React from 'react'
import Login_form_form from './components/Login_form_form'
import Login_form_title from './components/Login_form_title'
import { Flex } from 'antd'

const Login_form = () => {
  return (
    <Flex className="md:h-[100vh]" vertical justify='center' align='center' gap='20px'>
      <Login_form_title/>
      <Login_form_form/>
    </Flex>
  )
}

export default Login_form