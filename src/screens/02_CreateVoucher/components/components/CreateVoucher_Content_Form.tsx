//node_modules
import { Col, Flex, Row, Form, Input, Divider, DatePicker, Space, Button, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useGobalSelector } from '../../../../api/selector';
import { RootState, useAppDispatch } from '../../../../stores';
import { createVoucher } from '../../../../stores/reducers/provider/provider_actions';
import { formatMoney } from '../../../../util/formatMoney';
import { useSelector } from 'react-redux';
import { messageClear } from '../../../../stores/reducers/provider/provider_slice';
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
const CreateVoucherContentForm = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { userInfo, accessToken } = useGobalSelector()
    const { successMessage } = useSelector((state: RootState) => state.provider)
    // -------------------------- STATE -------------------------
    const [amountValue, setAmountValue] = useState<string>("0")
    const [expireDateValue, setExpireDateValue] = useState<string>(dayjs(Date.now() + 86400000).toISOString())
    const [priceValue, setPriceValue] = useState<string>("0")
    const [promoteValue, setPromoteValue] = useState<string>("0")
    const [valueValue, setValueValue] = useState<string>("0")
    const [descriptionValue, setDescriptionValue] = useState<string>("")
    const [addressValue, setAddressValue] = useState<string[]>([""])
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) || value === "") {
            setAmountValue(value);
        } else {
            toast.error("Sai dinh dang")
        }
    };
    const handleExpireDate = (expireDate: dayjs.Dayjs) => {
        setExpireDateValue(expireDate.toISOString());
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) || value === "") {
            setPriceValue(value);
        } else {
            toast.error("Sai dinh dang")
        }
    };
    const handlePromoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) || value === "") {
            setPromoteValue(value);
        } else {
            toast.error("Sai dinh dang")
        }
    };
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) || value === "") {
            setValueValue(value);
        } else {
            toast.error("Sai dinh dang")
        }
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setDescriptionValue(value);
    };
    const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = [e.target.value];
        setAddressValue(value);
    };
    const name: string = `[GiftCard Voucher] ${userInfo?.brandName} ${formatMoney(parseInt(valueValue))} đ`

    const handleSubmit = () => {
        dispatch(createVoucher({
            accessToken: accessToken,
            data: {
                name: name,
                amount: parseInt(amountValue),
                description: descriptionValue,
                addresses: addressValue,
                price: parseInt(priceValue),
                promoPrice: parseInt(promoteValue),
                value: parseInt(valueValue),
                expireDate: expireDateValue,
            }
        }))
    }
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage])
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------

    return (
        <Flex vertical>
            <Flex justify='space-between'>
                <Space direction='vertical'>
                    <Typography.Title level={5}>Tổng quan</Typography.Title>
                    <Typography.Paragraph style={{ color: 'black' }}>Thiết lập tạo voucher</Typography.Paragraph>
                </Space>
                <Space>
                    <Space>
                        <Button type='default'>Hủy</Button>
                        <Button onClick={handleSubmit} style={{ background: "linear-gradient(96deg, rgb(250, 148, 6) 6.19%, rgb(254, 188, 29) 97.63%)", border: 'none' }} type='primary'>Lưu</Button>
                    </Space>
                </Space>
            </Flex>
            <Divider></Divider>

            <Row >
                <Col span={12}>
                    <Form>
                        <Form.Item<FieldType> label="Số lượng" required name='amount'></Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <Input
                        onChange={handleAmountChange}
                        value={amountValue}
                        style={{ paddingTop: '7px', paddingBottom: '7px' }} type='text'
                        min={0}
                        placeholder='0'></Input>
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
                    <DatePicker
                        showTime
                        className='w-full py-2'
                        format={'DD-MM-YYYY HH:mm:ss'}
                        defaultValue={dayjs(Date.now() + 86400000)}
                        onChange={handleExpireDate}
                    ></DatePicker>
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
                    <Input
                        className='py-2 relative'
                        suffix
                        type='text'
                        min={0}
                        placeholder='0'
                        onChange={handlePriceChange}
                    ></Input>
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
                    <Input
                        className='py-2 relative'
                        suffix
                        type='text'
                        min={0}
                        placeholder='0'
                        onChange={handlePromoteChange}
                    ></Input>
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
                    <Input
                        className='py-2 relative'
                        suffix
                        type='text'
                        min={0}
                        placeholder='0'
                        onChange={handleValueChange}
                    ></Input>
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
                    <TextArea
                        style={{ height: 100 }}
                        placeholder='Nhập điều kiện sử dụng....'
                        onChange={handleDescriptionChange}
                    ></TextArea>
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
                    <TextArea
                        style={{ height: 100 }}
                        placeholder='Nhập địa chỉ...'
                        onChange={handleAddressChange}
                    ></TextArea>
                </Col>
                <Divider></Divider>
            </Row>
        </Flex>
    )
}

export default CreateVoucherContentForm