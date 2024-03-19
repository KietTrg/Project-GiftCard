//node_modules
import { Button, Space, Table, TableProps, Typography } from "antd"
import { Dayjs } from "dayjs";
//components
//actions
//selector
//function
import { formatMoney } from "../../../../util/formatMoney";
//constants
//styled
type DataType = {
    key: string;
    dateDeposit: Dayjs | string;
    amountDeposit: number;
}
const DepositAdmin_Content_Form = () => {
    // -------------------------- VAR ---------------------------
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Ngày nhập ký quỹ',
            dataIndex: 'dateDeposit',
            key: 'dateDeposit',
        },
        {
            title: 'Số tiền ký quỹ (VND)',
            dataIndex: 'amountDeposit',
            key: 'amountDeposit',
            render: () => <Typography.Text>{formatMoney(50000000)}</Typography.Text>
        },
        {
            title: '',
            key: 'operation',
            fixed: 'left',
            width: 100,
            render: () => <Button type="primary" >Sửa</Button>,
        },


    ]
    const data: DataType[] = [
        {
            key: '1',
            dateDeposit: '20/03/2024 17:28:42',
            amountDeposit: 50000000
        },
    ];
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
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

export default DepositAdmin_Content_Form