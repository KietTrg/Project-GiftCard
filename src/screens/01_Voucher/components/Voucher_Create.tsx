//node_modules
import { Button, Col, Divider, Flex, Form, Layout, Row, Typography,  Input, DatePicker } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { Content } from 'antd/es/layout/layout'
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
const Voucher_Create = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
  return (
  <Content className='p-8'>
    <Layout className='p-6 bg-white rounded-md'>
        <Flex justify='space-between'>
            <div>
                <Typography.Title level={5}>Tổng quan</Typography.Title>
                <Typography.Paragraph style={{color: 'black'}}>Thiết lập tạo voucher</Typography.Paragraph>
            </div>
            <div>
                <div className='flex items-center justify-center gap-3'>
                    <Button type='default'>Hủy</Button>
                    <Button style={{background: "linear-gradient(96deg, rgb(250, 148, 6) 6.19%, rgb(254, 188, 29) 97.63%)", border: 'none' }} type='primary'>Lưu</Button>
                </div>
            </div>
        </Flex>
        <Divider></Divider>
        <Flex vertical>
           
                <Row >
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Số lượng" required></Form.Item>
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
                            <Form.Item<FieldType> label="Ngày hết hạn" required></Form.Item>
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
                            <Form.Item<FieldType> label="Giá" required></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <div className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7'>
                            <span className='text-white'>đ</span>
                        </div>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Giá khuyến mãi" required></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <div className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7'>
                            <span className='text-white'>đ</span>
                        </div>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Giá Trị" required></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Input className='py-2 relative' suffix type='number' min={0} placeholder='0'></Input>
                        <div className='absolute bg-black w-8 z-20 h-8 flex items-center justify-center rounded-md top-1 right-7'>
                            <span className='text-white'>đ</span>
                        </div>
                    </Col>
                    <Divider></Divider>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form>
                            <Form.Item<FieldType> label="Điều kiện sử dụng" required></Form.Item>
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
                            <Form.Item<FieldType> label="Địa chỉ" required></Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <TextArea style={{height:100}} placeholder='Nhập địa chỉ...'></TextArea>
                    </Col>
                    <Divider></Divider>
                </Row>
        </Flex>
    </Layout>
    </Content>
  )
}

export default Voucher_Create