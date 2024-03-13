//node_modules
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
import Voucher_Content_Search from './components/Voucher_Content_Search'
import Voucher_Content_Table from './components/Voucher_Content_Table'
//actions
//selector
//function
//constants
//styled
const Voucher_Content = () => {
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
        <Voucher_Content_Search/>
        <Voucher_Content_Table/>
      </Layout>
    </Content>
  )
}

export default Voucher_Content