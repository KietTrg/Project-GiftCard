//node_modules
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
import VoucherContentSearch from './components/Voucher_Content_Search'
import VoucherContentTable from './components/Voucher_Content_Table'
//actions
//selector
//function
//constants
//styled
const VoucherContent = () => {
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
        <VoucherContentSearch />
        <VoucherContentTable />
      </Layout>
    </Content>
  )
}

export default VoucherContent