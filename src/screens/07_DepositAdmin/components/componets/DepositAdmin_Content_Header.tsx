//node_modules
import { Button, Col, DatePicker, DatePickerProps, Input, Row, Typography } from "antd"
import dayjs from "dayjs"
import { useState } from "react";
//components
//actions
//selector
//function
//constants
//styled
const DepositAdminContentHeader = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    const [amountValue, setAmountValue] = useState<number>(0)
    const dateDefaultString = dayjs().format('DD/MM/YYYY');
    console.log('dateDefaultString: ', dateDefaultString);
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    const handleDate: DatePickerProps['onChange'] = (_, dateString) => {
        console.log('dateString: ', dateString);
    };
    const handleAmountValue = () => {
    }
    console.log(amountValue)
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (

        <Row gutter={[18, 15]}>
            <Col md={5} xs={12}>
                <DatePicker onChange={handleDate} className='w-full py-2 relative' format={'DD/MM/YYYY'} defaultValue={dayjs()} ></DatePicker>
                <Typography.Text className="absolute left-5 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Ký ngày</Typography.Text>
            </Col>
            <Col md={14} xs={12}>
                <Input value={amountValue} type="number" className='w-full py-2' width={50} placeholder="Nhập số tiền đã kí quỹ"></Input>
            </Col>
            <Col className='w-full h-full' md={5} xs={5}>
                <Button style={{ height: '40px' }} disabled>Thêm</Button>
            </Col>
        </Row>

    )
}

export default DepositAdminContentHeader