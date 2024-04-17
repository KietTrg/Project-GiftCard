//node_modules
import { Button, Flex, Layout, Select, Table, TableColumnsType } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { useGobalSelector } from '../../../api/selector';
import { RootState, useAppDispatch } from '../../../stores';
import { getVoucherAll } from '../../../stores/reducers/provider/provider_actions';
import { useSelector } from 'react-redux';
import { formatMoney } from '../../../util/formatMoney';
import moment from 'moment';

//components
//actions
//selector
//function
//constants
//styled
interface DataType {
  key: number;
  name?: string;
  amount?: number;
  remainingAmount?: number;
  expireDate?: string;
  price?: string;
  promote?: string;
  value?: string;
  description?: string;
  address?: string[];
}
const ManageVoucherContent = () => {
  // -------------------------- VAR ---------------------------\
  const { accessToken } = useGobalSelector()
  const { dataVoucher } = useSelector((state: RootState) => state.provider)
  const dispatch = useAppDispatch()
  let filteredData: any[]

  const columns: TableColumnsType<DataType> = [
    { title: 'Tên voucher', dataIndex: 'name', key: '1' },
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


  // -------------------------- STATE -------------------------
  const [selectOption, setSelectOption] = useState<string>("All")

  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  const handleSelectChange = (value: string) => {
    setSelectOption(value);
  };
  filteredData = selectOption === 'All' ? dataVoucher : dataVoucher.filter(el => el.price === parseInt(selectOption));

  // -------------------------- EFFECT ------------------------
  useEffect(() => {
    if (accessToken) {
      dispatch(getVoucherAll(accessToken))
    }
  }, [accessToken])
  // -------------------------- RENDER ------------------------
  const data: DataType[] = filteredData.map((el, index) => ({
    key: index + 1,
    name: el.name,
    amount: el.amount,
    remainingAmount: el.remainQuantity,
    price: formatMoney(el.price),
    promote: formatMoney(el.promoPrice),
    value: formatMoney(el.value),
    expireDate: moment(el.expireDate).format('DD/MM/YYYY'),
    description: el.description,
    address: el.addresses,

  })) || []
  // -------------------------- MAIN --------------------------

  return (
    <Content className='p-8'>
      <Layout className='p-6 bg-white rounded-md'>
        <Flex vertical gap={20}>
          <Flex justify="end">
            <Select
              onChange={handleSelectChange}
              defaultValue="All"
              className="w-[150px]"
              options={[
                { value: 'All', label: 'Tất cả' },
                { value: '50000', label: '50.000' },
                { value: '100000', label: '100.000' },
                { value: '200000', label: '200.000' },
              ]}
            />
          </Flex>
          <Table columns={columns} dataSource={data} scroll={{ x: 1400 }} pagination={{ total: dataVoucher.length }} />;
        </Flex>
      </Layout>
    </Content>
  )
}

export default ManageVoucherContent