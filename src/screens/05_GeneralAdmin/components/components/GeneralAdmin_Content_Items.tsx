//node_modules
import { Card, Col, Flex, Image, Row, Space, Typography } from "antd"
//components
import { iconConvert } from "../../../../components/svg/iconDashboard"
//actions
//selector
//function
import { formatMoney } from "../../../../util/formatMoney"
import { RootState, useAppDispatch } from "../../../../stores"
import { useGobalSelector } from "../../../../api/selector"
import { useEffect } from "react"
import { getAdminGeneral } from "../../../../stores/reducers/admin/admin_actions"
import { useSelector } from "react-redux"
//constants
//styled
const GeneralAdminContentItems = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { accessToken } = useGobalSelector()
    const { dataGeneral } = useSelector((state: RootState) => state.admin)
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        if (accessToken) {
            dispatch(getAdminGeneral(accessToken))
        }
    }, [accessToken])
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Row gutter={[{ xl: 16, md: 16, xs: 6 }, { xl: 16, md: 16, xs: 16 }]}>
            <Col xl={6} md={12} xs={24} >
                <Card style={{ width: '100%', padding: '8px' }}>
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
            <Col xl={6} md={12} xs={24}>
                <Card style={{ width: '100%', padding: '8px' }}>
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
            <Col xl={6} md={12} xs={24}>
                <Card style={{ width: '100%', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem3.png"></Image>
                        <Typography.Text>Tổng số tiền user quy đổi</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title level={4}>{formatMoney(dataGeneral.total)}</Typography.Title>
                            <Space className="bg-black text-white px-2 rounded-md">
                                VNDC
                            </Space>
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col xl={6} md={12} xs={24}>
                <Card style={{ width: '100%', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem4.png"></Image>
                        <Typography.Text>Số lượng quy đổi</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title level={4}>{dataGeneral.quantity}</Typography.Title>
                            <Space className="bg-black text-white px-2 rounded-md">
                                VNDC
                            </Space>
                        </Flex>
                    </Flex>
                </Card>
            </Col>
            <Col xl={6} md={12} xs={24}>
                <Card style={{ width: '100%', padding: '8px' }}>
                    <Flex vertical gap={10}>
                        <Image width={50} height={50} preview={false} src="../../../../../public/images/dashboardItem5.png"></Image>
                        <Typography.Text>Số lượng ký quỹ còn lại</Typography.Text>
                        <Flex justify="space-between">
                            <Typography.Title style={{ color: 'red' }} level={4}>{formatMoney(dataGeneral.deposit)}</Typography.Title>
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

export default GeneralAdminContentItems