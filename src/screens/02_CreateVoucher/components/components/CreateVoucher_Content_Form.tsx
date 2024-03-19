//node_modules
import { Col, Flex, Row, Form, Input, Divider, DatePicker, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
//components
//actions
//selector
//function
//constants
//styled
type FieldType = {
    amount?: number;
    expireDate?: Date;
    price?: number;
    promote?: number;
    value?: number;
    description?: string;
    address?: string;
  };
const CreateVoucher_Content_Form = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------

  return (
    <Flex vertical>
                <Row >
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Số lượng" required name='amount'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input style={{paddingTop: '7px', paddingBottom: '7px'}} type='number' min={0} placeholder='0'></Input>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Ngày hết hạn" required name='expireDate'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <DatePicker className='w-full py-2' format={'DD-MM-YYYY HH:mm:ss'} defaultValue={dayjs(Date.now()+86400000)}></DatePicker>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Giá" required name='price'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <Space align='center' className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7 text-white'>đ</Space>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Giá khuyến mãi" required name='promote'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <Space align='center' className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7 text-white'>đ</Space>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Giá Trị" required name='value'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <Space align='center' className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7 text-white'>đ</Space>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Điều kiện sử dụng" required name='description'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <TextArea style={{height:100}} placeholder='Nhập điều kiện sử dụng....'></TextArea>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Địa chỉ" required name='address'></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <TextArea style={{height:100}} placeholder='Nhập địa chỉ...'></TextArea>
                    </Col>
                    <Divider></Divider>
                </Row>
    </Flex>
  )
}

export default CreateVoucher_Content_Form