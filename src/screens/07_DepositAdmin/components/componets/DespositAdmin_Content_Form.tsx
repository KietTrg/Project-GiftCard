//node_modules
import { Button, Space, Table, TableProps, Typography } from "antd"
import moment from 'moment'
//components
//actions
//selector
//function
import { formatMoney } from "../../../../util/formatMoney";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../stores";
import { useGobalSelector } from "../../../../api/selector";
import { useEffect } from "react";
import { getAdminDeposit } from "../../../../stores/reducers/admin/admin_actions";
//constants
//styled
type DataType = {
    key: number;
    dateDeposit: string;
    amountDeposit: number;
}
const DepositAdminContentForm = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { accessToken } = useGobalSelector()
    const { dataDeposit } = useSelector((state: RootState) => state.admin)
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Ngày nhập ký quỹ',
            dataIndex: 'dateDeposit',
            key: 'dateDeposit',
            render: (dateDeposit) => <Typography.Text>{dateDeposit}</Typography.Text>

        },
        {
            title: 'Số tiền ký quỹ (VND)',
            dataIndex: 'amountDeposit',
            key: 'amountDeposit',
            render: (amountDeposit) => <Typography.Text>{formatMoney(amountDeposit)}</Typography.Text>
        },
        {
            title: '',
            key: 'operation',
            fixed: 'left',
            width: 100,
            render: () => <Button type="primary" >Sửa</Button>,
        },
    ];
    const data: DataType[] = dataDeposit?.map((el, index) => ({
        key: index + 1,
        dateDeposit: moment(el.date).format("DD-MM-YYYY, hh:mm:ss"),
        amountDeposit: el.amount

    })) || []

    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        if (accessToken) {
            dispatch(getAdminDeposit(accessToken))
        }
    }, [accessToken])
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Space direction="vertical">
            <Typography.Title level={3}>Lịch sử ký quỹ</Typography.Title>
            <Table columns={columns} dataSource={data} pagination={false}
                summary={(total) => {
                    let totalDeposit = 0
                    total.forEach(({ amountDeposit }) => {
                        totalDeposit += amountDeposit
                    })
                    return (<Table.Summary.Row>
                        <Table.Summary.Cell index={0}>Tổng tiền kí quỹ</Table.Summary.Cell>
                        <Table.Summary.Cell index={1}>
                            <Typography.Text style={{ color: 'black' }}>{formatMoney(totalDeposit)}</Typography.Text>
                        </Table.Summary.Cell>

                    </Table.Summary.Row>)
                }}


            >

            </Table>

        </Space>
    )
}

export default DepositAdminContentForm