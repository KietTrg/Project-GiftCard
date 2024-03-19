//node_modules
import { Col, Divider, Flex, Input, Row, Upload, Form, Select, Typography, message } from "antd"
import type { GetProp, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
//components
import { iconViewPass } from "../../../../components/svg/iconDashboard"
//actions
//selector
//function
//constants
//styled
type FieldType = {
    imageAvatar?: File;
    name?: string;
    brandName?: string;
    address?: string;
    password?: string;
    confirmPassword?: string;
    description?: number;
};
type optionSelectType = {
    value: string;
    label: string;
}
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const CreateAdmin_Content_Form = () => {
    // -------------------------- VAR ---------------------------
    const optionSelect: optionSelectType[] = [
        { value: 'Bạc Liêu', label: 'Bạc Liêu' },
        { value: 'Bắc Giang', label: 'Bắc Giang' },
        { value: 'Bắc Ninh', label: 'Bắc Ninh' },
        { value: 'Bình Định', label: 'Bình Định' },
        { value: 'Bình Phước', label: 'Bình Phước' },
        { value: 'Bình Thuận', label: 'Bình Thuận' },
        { value: 'Cà Mau', label: 'Cà Mau' },
        { value: 'Cao Bằng', label: 'Cao Bằng' },
    ]
    // -------------------------- STATE -------------------------
    const [viewPass, setViewPass] = useState<Boolean>(false)
    const [viewConfPass, setViewConfPass] = useState<Boolean>(false)
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    const getBase64 = (img: FileType, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file: FileType) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    // -------------------------- MAIN --------------------------
    return (
        <Flex vertical>
            <Row >
                <Col span={12}>
                    <Form.Item<FieldType> label="Logo" required name='imageAvatar'></Form.Item>
                </Col>
                <Col span={12}>
                    <Upload
                        name="imageAvatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <Typography.Paragraph style={{ color: 'gray', fontSize: '12px' }}>JPG hoặc PNG. Kích thước 512x512 pixels</Typography.Paragraph>
                </Col>
                <Divider></Divider>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item<FieldType> label="Tên đăng nhập" required name='name'></Form.Item>
                </Col>
                <Col span={12}>
                    <Input style={{ paddingTop: '7px', paddingBottom: '7px' }} type='text' placeholder='Tên đăng nhập'></Input>
                </Col>
                <Divider></Divider>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item<FieldType> label="Tên thương hiệu" required name='brandName'></Form.Item>
                </Col>
                <Col span={12}>
                    <Input style={{ paddingTop: '7px', paddingBottom: '7px' }} type='text' placeholder='Tên thương hiệu'></Input>
                </Col>
                <Divider></Divider>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item<FieldType> label="Tên thương hiệu" required name='address'></Form.Item>
                </Col>
                <Col span={12}>
                    <Select
                        placeholder='Chọn địa điểm'
                        style={{ width: '100%', height: '35px' }}
                        options={optionSelect}
                    />
                </Col>
                <Divider></Divider>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item<FieldType> label="Mật khẩu" required name='password'></Form.Item>
                </Col>
                <Col span={12}>
                    <Input style={{ paddingTop: '7px', paddingBottom: '7px', position: 'relative' }} type={viewPass ? 'text' : 'password'} placeholder='Nhập mật khẩu'></Input>
                    <Typography.Paragraph className="w-5 h-5 absolute top-2 right-2" onClick={() => setViewPass(!viewPass)}>{iconViewPass()}</Typography.Paragraph>
                </Col>
                <Divider></Divider>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item<FieldType> label="Nhập lại mật khẩu" required name='password'></Form.Item>
                </Col>
                <Col span={12}>
                    <Input style={{ paddingTop: '7px', paddingBottom: '7px', position: 'relative' }} type={viewConfPass ? 'text' : 'password'} placeholder='Nhập lại mật khẩu'></Input>
                    <Typography.Paragraph className="w-5 h-5 absolute top-2 right-2" onClick={() => setViewConfPass(!viewConfPass)}>{iconViewPass()}</Typography.Paragraph>
                </Col>
                <Divider></Divider>

            </Row>
            <Row>
                <Col span={12}>
                    <Form>
                        <Form.Item<FieldType> label="Mô tả" name='address'></Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <TextArea style={{ height: 100 }} placeholder='Nhập mô tả...'></TextArea>
                </Col>
            </Row>

        </Flex>
    )
}

export default CreateAdmin_Content_Form