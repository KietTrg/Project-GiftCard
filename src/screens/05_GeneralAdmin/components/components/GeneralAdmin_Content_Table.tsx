//node_modules
import { Card, Col, DatePicker, Input, Row, Table, TableProps, Typography } from "antd"
import dayjs from "dayjs"
//components
import { iconSearch } from "../../../../components/svg/iconDashboard"
//actions
//selector
//function
//constants
//styled
type TableData = {
    value?: number;
    nameEvoucher?: string;
    email?: string;
    time?: string;
    price?: number;
    intoMoney?: number;
}
const GeneralAdminContentTable = () => {
    // -------------------------- VAR ---------------------------
    const columns: TableProps<TableData>['columns'] = [
        {
            title: 'Số lượng',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Tên evoucher',
            dataIndex: 'nameEvoucher',
            key: 'nameEvoucher',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Giá (VNDC)',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Thành tiền (VNDC)',
            dataIndex: 'intoMoney',
            key: 'intoMoney',

        },
    ]
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Card className="bg-white mt-8 rounded-md">
            <Row >
                <Col lg={7} md={24} >
                    <Typography.Title className="py-3 w-full" level={2}>Lịch sử giao dịch</Typography.Title>
                </Col>
                <Col lg={17} md={24} >
                    <Row gutter={[15, { md: 15 }]}>
                        <Col md={12}>
                            <Input className=" p-3 text-lg" prefix={iconSearch()} placeholder="Tìm kiếm"></Input>
                        </Col>
                        <Col md={6} style={{ padding: 0 }}>
                            <DatePicker className='text-lg p-3 w-full' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Từ ngày</Typography.Text>
                        </Col>
                        <Col md={6} style={{ padding: 0 }}>
                            <DatePicker className='text-lg p-3 w-full' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Đến ngày</Typography.Text>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table scroll={{ x: 'max-content' }} columns={columns}></Table>
        </Card>

    )
}

export default GeneralAdminContentTable