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
interface PaginationInfo {
    current: number;
    pageSize: number;
    total?: number;
}
const GeneralAdminContentTable = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { accessToken } = useGobalSelector()
    const { dataOrderList } = useSelector((state: RootState) => state.admin)

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
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
        current: 1,
        pageSize: 10,
        total: 0,
    });
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

    const handlePagination = (pagination: any) => {
        setPaginationInfo({
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total,
        });

    }


    // -------------------------- EFFECT ------------------------
    const skipTemp = (paginationInfo.current - 1) * 10
    const limitTemp = paginationInfo.pageSize
    console.log('limitTemp: ', limitTemp);
    useEffect(() => {
        if (accessToken) {
            const params = {
                skip: skipTemp,
                limit: limitTemp,
                fromDate,
                toDate,
                search
            }
            dispatch(getAdminOrderList({ accessToken, params }))
        }
    }, [accessToken, skipTemp, limitTemp, fromDate, toDate, search])
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    // skip = Pagination.curren - 1
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
                pagination={{ total: dataOrderList.total }}
                onChange={handlePagination}
            ></Table>
        </Card>

    )
}

export default GeneralAdminContentTable