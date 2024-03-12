import React from 'react'
import Login_Image from '../../../../public/images/Login_Image.png'
import { Image } from 'antd'


const Login_qr = () => {
  return (
    <Image src={Login_Image} height="100vh" style={{padding: '10px', width:'670px', objectFit:'cover'}}/>
  )
}

export default Login_qr