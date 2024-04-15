//node_modules
import { Card, Col, DatePicker, Input, Row, Table, TableProps, Typography } from "antd"
import dayjs from "dayjs"
//components
import { iconSearch } from "../../../../components/svg/iconDashboard"
import { RootState, useAppDispatch } from "../../../../stores";
import { useGobalSelector } from "../../../../api/selector";
import { useEffect, useState } from "react";
import { getAdminOrderList } from "../../../../stores/reducers/admin/admin_actions";
import { useSelector } from "react-redux";
import moment from "moment";
import { formatMoney } from "../../../../util/formatMoney";
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
    price?: string;
    intoMoney?: string;
}
const GeneralAdminContentTable = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { accessToken } = useGobalSelector()
    const { dataOrderList } = useSelector((state: RootState) => state.admin)
    console.log('dataOrderList: ', dataOrderList.order);
    console.log('dataOrderList: ', dataOrderList.total);
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
    const data: TableData[] = dataOrderList.order.map((el, index) => ({
        key: index + 1,
        value: el.quantity,
        nameEvoucher: el.itemName,
        email: el.email,
        time: moment(el.createdAt).format("DD/MM/YYYY, hh:mm:ss"),
        price: formatMoney(el.unitPrice),
        intoMoney: formatMoney(el.totalAmountPaid)

    })) || []
    // -------------------------- STATE -------------------------
    const [skip, setSkip] = useState<number | null>(null)
    const [limit, setLimit] = useState<number | null>(10)
    const [fromDate, setFromDate] = useState<string | null>('2023-09-20T17:00:00.000Z')
    const [toDate, setToDate] = useState<string | null>(dayjs(Date.now()).toISOString())
    const [search, setSearch] = useState<string>("")
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    const handleFromDateChange = (dateFrom: dayjs.Dayjs) => {
        setFromDate(dateFrom.toISOString());
    }
    const handleToDateChange = (dateTo: dayjs.Dayjs) => {
        setToDate(dateTo.toISOString());
    }
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        if (accessToken) {
            const params = {
                skip,
                limit,
                fromDate,
                toDate,
                search
            }
            dispatch(getAdminOrderList({ accessToken, params }))
        }
    }, [accessToken, skip, limit, fromDate, toDate, search])
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
                            <Input onChange={(e) => setSearch(e.target.value)} value={search} className=" p-3 text-lg" prefix={iconSearch()} placeholder="Tìm kiếm"></Input>
                        </Col>
                        <Col md={6} style={{ padding: 0 }}>
                            <DatePicker onChange={handleFromDateChange} className='text-lg p-3 w-full' format={'DD/MM/YYYY'} defaultValue={dayjs('2023-09-20T17:00:00.000Z')}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Từ ngày</Typography.Text>
                        </Col>
                        <Col md={6} style={{ padding: 0 }}>
                            <DatePicker onChange={handleToDateChange} className='text-lg p-3 w-full' format={'DD/MM/YYYY'} defaultValue={dayjs(Date.now())}></DatePicker>
                            <Typography.Text className="absolute left-3 -top-3 z-30 bg-white" style={{ color: 'gray' }}>Đến ngày</Typography.Text>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table
                scroll={{ x: 'max-content' }}
                columns={columns}
                dataSource={data}
                pagination={{ total: dataOrderList.total }}></Table>
        </Card>

    )
}

export default GeneralAdminContentTable