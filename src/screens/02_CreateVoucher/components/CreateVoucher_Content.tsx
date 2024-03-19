//node_modules
import { Divider, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
import CreateVoucherContentHeader from './components/CreateVoucher_Content_Header'
import CreateVoucherContentForm from './components/CreateVoucher_Content_Form'
//actions
//selector
//function
//constants
//styled
const CreateVoucherContent = () => {
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
        <CreateVoucherContentHeader />
        <Divider></Divider>
        <CreateVoucherContentForm />
      </Layout>
    </Content>
  )
}

export default CreateVoucherContent