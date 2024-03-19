//node_modules
import { Col, DatePicker, Flex, Input, Row, Space, Table, TableProps, Typography } from "antd"
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
const GeneralAdmin_Content_Table = () => {
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
        <Flex vertical className="bg-white px-4 py-6 mt-8 rounded-md">
            <Row >
                <Col span={7}>
                    <Typography.Title className="py-4 w-full" level={2}>Lịch sử giao dịch</Typography.Title>
                </Col>
                <Col span={17}>
                    <Flex gap={5}>
                        <Input className="py-2 w-[500px] mr-3 text-lg" prefix={iconSearch()} placeholder="Tìm kiếm"></Input>
                        <Space className="relative ">
                            <DatePicker className=' py-4 ' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Từ ngày</Typography.Text>
                        </Space>
                        <Space className="relative">
                            <DatePicker className='w-full py-4' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Đến ngày</Typography.Text>
                        </Space>
                    </Flex>
                </Col>
            </Row>
            <Table columns={columns}></Table>
        </Flex>

    )
}

export default GeneralAdmin_Content_Table