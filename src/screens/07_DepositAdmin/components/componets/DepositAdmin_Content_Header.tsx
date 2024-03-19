//node_modules
import { Button, Col, DatePicker, Input, Row, Typography } from "antd"
import dayjs from "dayjs"
//components
//actions
//selector
//function
//constants
//styled
const DepositAdmin_Content_Header = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Row>
            <Col span={18} >
                <Row gutter={18}>
                    <Col span={5}>
                        <DatePicker className='w-full py-2 relative' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                        <Typography.Text className="absolute left-5 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Ký ngày</Typography.Text>
                    </Col>
                    <Col span={8}>
                        <Input type="number" className='w-full py-2' width={50} placeholder="Nhập số tiền đã kí quỹ"></Input>
                    </Col>
                    <Col className='w-full h-full' span={5}>
                        <Button style={{ height: '40px' }} disabled>Thêm</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default DepositAdmin_Content_Header