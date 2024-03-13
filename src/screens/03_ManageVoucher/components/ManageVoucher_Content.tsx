//node_modules
import { Button, Flex, Layout, Select, Table, TableColumnsType } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'

//components
//actions
//selector
//function
//constants
//styled
interface DataType {
    key: React.Key;
    name?:string;
    amount?: number;
    remainingAmount?: number;
    expireDate?: string;
    price?: string;
    promote?: string;
    value?: string;
    description?: string;
    address?: string; 
  }
const ManageVoucher_Content = () => {
    // -------------------------- VAR ---------------------------
    const columns: TableColumnsType<DataType> = [
        { title: 'Tên voucher', dataIndex: 'name', key: '1'},
        { title: 'Số lượng', dataIndex: 'amount', key: '2' },
        { title: 'Số lượng còn lại', dataIndex: 'remainingAmount', key: '3' },
        { title: 'Giá', dataIndex: 'price', key: '4' },
        { title: 'Giá khuyến mãi', dataIndex: 'promote', key: '5' },
        { title: 'Giá trị', dataIndex: 'value', key: '6' },
        { title: 'Ngày hết hạn', dataIndex: 'expireDate', key: '7' },
        { title: 'Điều kiện sử dụng', dataIndex: 'description', key: '8' },
        { title: 'Địa điểm áp dụng', dataIndex: 'address', key: '9' },
        {
          title: '',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: () => <Button type="primary" danger>Xóa</Button>,
        },
      ];
      
      const data: DataType[] = [
        {
          key: '1',
          name: '[GiftCard Voucher] Runtogether 100,000 đ',
          amount: 10,
          remainingAmount: 8,
          price: Number((100000).toFixed(1)).toLocaleString(),
          promote: Number((100000).toFixed(1)).toLocaleString(),
          value: Number((100000).toFixed(1)).toLocaleString(),
          expireDate: '29-02-2024',
          description: '- Thời gian áp dụng: Đến hết ngày 29/2/2024 ',
          address: '81 Nguyễn Hiền, KDC 91B, An Khánh, Ninh Kiều, Cần Thơ',
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
                        options={[
                            { value: 'All', label: 'Tất cả' },
                            { value: '50000', label: '50.000' },
                            { value: '100000', label: '100.000' },
                            { value: '200000', label: '200.000'},
                        ]}
                    />
                </Flex>
                <Table columns={columns} dataSource={data} scroll={{ x: 1400 }} />;
            </Flex>
        </Layout>
    </Content>
  )
}

export default ManageVoucher_Content