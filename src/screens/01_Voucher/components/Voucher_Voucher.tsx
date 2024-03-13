//node_modules
import { Button, Col, Input, Layout, Row, Table } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
//actions
//selector
//function
//constants
const columns = [
  {
    title: 'Mã voucher',
    dataIndex: 'ma_voucher',
    key: 'ma_voucher',
  },
  {
    title: 'Giá trị',
    dataIndex: 'gia_tri',
    key: 'gia_tri',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'trang_thai',
    key: 'trang_thai',
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'ngay_het_han',
    key: 'ngay_het_han',
  },
];
//styled


const Voucher_Content_Voucher = () => { 
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Content className='p-8'>
    <Layout className='p-6 bg-white rounded-md'>
       <Row className='flex gap-2'>
         <Col className='py-2'>
           <Input className='h-[40px]' placeholder='Nhập mã voucher'></Input>
         </Col>
         <Col className='py-2'>
           <Button className='py-2 flex items-center h-[40px] bg-[#0958d9] text-white' >
             <span>Tìm kiếm</span>
           </Button>
         </Col>
       </Row>
       <Table columns={columns}></Table>
    </Layout>
       
 </Content>
  )
}

export default Voucher_Content_Voucher