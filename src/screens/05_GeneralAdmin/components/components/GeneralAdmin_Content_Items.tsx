//node_modules
import { Card, Col, Flex, Image, Row, Space, Typography } from "antd"
//components
import { iconConvert } from "../../../../components/svg/iconDashboard"
//actions
//selector
//function
import { formatMoney } from "../../../../util/formatMoney"
//constants
//styled
const GeneralAdmin_Content_Items = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Row gutter={[24, 16]}  >
            <Col span={6}>
                <Card style={{ width: '280px', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem1.png"></Image>
                        <Typography.Text>Số lượng giao dịch trong ngày</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title level={4}>0</Typography.Title>
                            {iconConvert()}
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col span={6}>
                <Card style={{ width: '280px', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem2.png"></Image>
                        <Typography.Text>Số lượng người truy cập</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Link href="https://ant.design" target="_blank">
                                Xem thống kê truy cập
                            </Typography.Link>
                            {iconConvert()}
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col span={6}>
                <Card style={{ width: '280px', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem3.png"></Image>
                        <Typography.Text>Tổng số tiền user quy đổi</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title level={4}>{formatMoney(55322025)}</Typography.Title>
                            <Space className="bg-black text-white px-2 rounded-md">
                                VNDC
                            </Space>
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col span={6}>
                <Card style={{ width: '280px', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem4.png"></Image>
                        <Typography.Text>Số lượng quy đổi</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title level={4}>384</Typography.Title>
                            <Space className="bg-black text-white px-2 rounded-md">
                                VNDC
                            </Space>
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col span={6}>
                <Card style={{ width: '280px', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem5.png"></Image>
                        <Typography.Text>Số lượng ký quỹ còn lại</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title style={{ color: 'red' }} level={4}>{formatMoney(-597025)}</Typography.Title>
                            <Space className="bg-black text-white px-2 rounded-md">
                                VNDC
                            </Space>
                        </Flex>
                    </Flex>
                </Card>
            </Col>

        </Row>
    )
}

export default GeneralAdmin_Content_Items