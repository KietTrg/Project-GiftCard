//node_modules
import { Col, Row } from "antd"
//components
import LoginForm from "./components/Login_form"
import LoginImage from "./components/LoginImage"

//actions
//selector
//function
//constants
//styled

const LoginScreens = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (

    <Row className="flex items-center justify-center md:h-full md:justify-center md:items-center lg:h-[100vh] lg:justify-center lg:items-center ">
      <Col className=" lg:hidden " span={12}><LoginImage /></Col>
      <Col span={12}><LoginForm /></Col>
    </Row>


  )
}

export default LoginScreens