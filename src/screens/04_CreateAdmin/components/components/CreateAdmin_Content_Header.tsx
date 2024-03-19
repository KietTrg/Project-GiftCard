//node_modules
import { Button, Flex, Space, Typography } from "antd"
//components
//actions
//selector
//function
//constants
//styled
const CreateAdminContentHeader = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Flex justify='space-between'>
            <Space direction='vertical'>
                <Typography.Title level={5}>Tổng quan</Typography.Title>
                <Typography.Paragraph style={{ color: 'black' }}>Thiết lập tạo tài khoản admin</Typography.Paragraph>
            </Space>
            <Space>
                <Space size={8}>
                    <Button type='default'>Hủy</Button>
                    <Button style={{ background: "linear-gradient(96deg, rgb(250, 148, 6) 6.19%, rgb(254, 188, 29) 97.63%)", border: 'none' }} type='primary'>Lưu</Button>
                </Space>
            </Space>
        </Flex>
    )
}

export default CreateAdminContentHeader