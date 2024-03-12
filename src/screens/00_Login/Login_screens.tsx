import { Col, Flex, Row } from "antd"
import Login_form from "./components/Login_form"
import Login_qr from "./components/Login_qr"

const Login_screens = () => {
  return (
   <>
    
        <Row className="flex md:justify-center md:items-center items-center justify-center border border-red-500 md:h-full">
          <Col className="md:hidden" span={12}><Login_qr/></Col>
          <Col  span={12} ><Login_form/></Col>
        </Row>
   </>
  
  )
}

export default Login_screens