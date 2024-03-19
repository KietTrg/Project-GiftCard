//node_modules
import { Flex, Typography } from "antd"
//components
//actions
//selector
//function
//constants
//styled

const LoginFormTitle = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Flex vertical justify="center" align="center">
      <img src='./images/Icon_Group.png' width='53.93px' height='68px'></img>
      <Flex vertical align="center">
        <Typography.Title className=" md:text-center md:w-[300px]" >Welcome to GIFTCARDS</Typography.Title>
        <Typography.Title className=" md:text-center" level={5}  >Please sign-in to your account and start the adventure</Typography.Title>
      </Flex>
    </Flex>
  )
}

export default LoginFormTitle