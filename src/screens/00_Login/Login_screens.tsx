//node_modules
import { Col, Row } from "antd"
//components
import Login_form from "./components/Login_form"
import Login_qr from "./components/Login_qr"
//actions
//selector
//function
//constants
//styled

const Login_screens = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
   <>
        <Row className="flex md:justify-center md:items-center items-center justify-center  md:h-full">
          <Col className="md:hidden" span={12}><Login_qr/></Col>
          <Col  span={12} ><Login_form/></Col>
        </Row>
   </>
  
  )
}

export default Login_screens