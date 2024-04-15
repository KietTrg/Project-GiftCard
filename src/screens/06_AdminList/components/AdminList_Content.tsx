//node_modules
import { Button, Flex, Image, Layout, Select, Table, TableColumnsType, Tag, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
//components
//actions
//selector
//function
import { formatMoney } from '../../../util/formatMoney';
import { RootState, useAppDispatch } from '../../../stores';
import { getAdminList } from '../../../stores/reducers/admin/admin_actions';
import { useGobalSelector } from '../../../api/selector';
import { useSelector } from 'react-redux';
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
    const dispatch = useAppDispatch()
    const { accessToken } = useGobalSelector()
    const { dataList } = useSelector((state: RootState) => state.admin)

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
        { title: 'Đã thanh toán', width: 150, dataIndex: 'paid', key: '3', render: (paid: number) => <Typography.Text>{formatMoney(paid)}</Typography.Text> },
        { title: 'Tổng tiền đã bán', width: 150, dataIndex: 'totalPaid', key: '4', render: (totalPaid: number) => <Typography.Text>{formatMoney(totalPaid)}</Typography.Text> },
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

    const data: DataType[] = dataList?.map((el, index) => ({
        key: index + 1,
        name: el.username,
        logo: el.logo,
        paid: el.finalizationPaid ? el.finalizationPaid : 0,
        totalPaid: el.finalizationAmount ? el.finalizationAmount : 0,
        status: el.isActive ? 'Đã kích hoạt' : 'Ngưng kích hoạt',
        description: el.description,
        roles: el.roles[0],

    })) || [];
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    useEffect(() => {
        if (accessToken) {
            dispatch(getAdminList(accessToken))
        }
    }, [accessToken])
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