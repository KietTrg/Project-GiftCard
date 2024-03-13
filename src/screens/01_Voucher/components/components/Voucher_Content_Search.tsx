//node_modules
import { Button, Col, Input, Row } from 'antd'
//components
//actions
//selector
//function
//constants
//styled

const Voucher_Content_Search = () => {
  // -------------------------- VAR -------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Row className='flex gap-2'>
    <Col className='py-2'>
      <Input className='h-[40px]' placeholder='Nhập mã voucher'></Input>
    </Col>
    <Col className='py-2'>
      <Button type='primary' >
        Tìm kiếm
      </Button>
    </Col>
  </Row>
  )
}

export default Voucher_Content_Search