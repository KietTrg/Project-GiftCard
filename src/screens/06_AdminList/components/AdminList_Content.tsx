//node_modules
import { Button, Flex, Image, Layout, Select, Table, TableColumnsType, Tag, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
//components
//actions
//selector
//function
import { formatMoney } from '../../../util/formatMoney';
//constants
//styled
interface DataType {
    key: React.Key;
    name?: string;
    logo?: string;
    paid?: number;
    totalPaid?: number;
    status?: string;
    description?: string;
    roles?: string;
}
interface OptionType {
    value: string;
    label: string;
}
const AdminListContent = () => {
    // -------------------------- VAR ---------------------------
    const option: OptionType[] = [
        { value: 'All', label: 'Tất cả' },
        { value: 'Active', label: 'Đã kích hoạt' },
        { value: 'Deactive', label: 'Ngưng kích hoạt' },
    ]
    const columns: TableColumnsType<DataType> = [
        { title: 'User Name', width: 150, dataIndex: 'name', key: '1' },
        {
            title: 'Logo', width: 80, dataIndex: 'logo', key: '2', render: (logo: string) => (
                <Image src={logo}></Image>
            )
        },
        { title: 'Đã thanh toán', width: 150, dataIndex: 'paid', key: '3', render: () => <Typography.Text>{formatMoney(1241247)}</Typography.Text> },
        { title: 'Tổng tiền đã bán', width: 150, dataIndex: 'totalPaid', key: '4', render: () => <Typography.Text>{formatMoney(320000)}</Typography.Text> },
        {
            title: 'Trạng thái', dataIndex: 'status', key: '5', render: (status: string) => (
                <span>
                    {status === 'Đã kích hoạt' ?
                        <Tag color={'green'} key={status}>
                            {status}
                        </Tag>
                        : <Tag color={'red'} key={status}>
                            {status}
                        </Tag>}
                </span>)
        },
        { title: 'Mô tả', width: 300, dataIndex: 'description', key: '6' },
        { title: 'Roles', dataIndex: 'roles', key: '7' },

        {
            title: '',
            key: 'operation',
            fixed: 'right',
            width: 350,
            render: () => (
                <Flex justify='space-between'>
                    <Button type="primary" disabled>Thanh Toán</Button>
                    <Button type="default" danger>Ngưng kích hoạt</Button>
                    <Button type="primary" danger>Xóa</Button>
                </Flex>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'runtogether1',
            logo: 'https://giftcard-portal-dev.s3.ap-southeast-1.amazonaws.com/logo/Logo%20-%20256x256.png',
            paid: 1241247,
            totalPaid: 320000,
            status: 'Đã kích hoạt',
            description: 'Tất cả sản phẩm được đội ngũ Run Together thiết kế dành riêng cho khách hàng muốn sở hữu những sản phẩm chỉ được tìm thấy duy nhất tại Run Together Shop.',
            roles: 'Provider'
        },
    ];
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------

    return (
        <Content className='p-8'>
            <Layout className='p-6 bg-white rounded-md'>
                <Flex vertical gap={20}>
                    <Flex justify="end">
                        <Select
                            defaultValue="All"
                            className="w-[150px]"
                            options={option}
                        />
                    </Flex>
                    <Table columns={columns} dataSource={data} scroll={{ x: 1400 }} />;
                </Flex>
            </Layout>
        </Content>
    )
}

export default AdminListContent