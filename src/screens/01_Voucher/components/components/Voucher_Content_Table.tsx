//node_modules
import { Table } from 'antd'
//components
//actions
//selector
//function
//constants
//styled

const Voucher_Content_Table = () => {
    // -------------------------- VAR ---------------------------
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
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Table columns={columns}></Table>
  )
}

export default Voucher_Content_Table