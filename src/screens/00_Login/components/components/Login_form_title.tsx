import { Flex, Typography } from "antd"
import Icon_Logo from '../../../../../public/images/Icon_Group.png'


const Login_form_title = () => {
  return (
    <Flex vertical justify="center" align="center">
      <img src={Icon_Logo} width='53.93px' height='68px'></img>
      <Flex vertical align="center">
        <Typography.Title className=" md:text-center md:w-[300px]" >Welcome to GIFTCARDS</Typography.Title>
        <Typography.Title className=" md:text-center" level={5}  >Please sign-in to your account and start the adventure</Typography.Title>
      </Flex>
    </Flex>
  )
}

export default Login_form_title