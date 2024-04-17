//node_modules
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
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
        <CreateVoucherContentForm />
      </Layout>
    </Content>
  )
}

export default CreateVoucherContent