//node_modules
import { Divider, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
//components
import CreateVoucher_Content_Header from './components/CreateVoucher_Content_Header'
import CreateVoucher_Content_Form from './components/CreateVoucher_Content_Form'
//actions
//selector
//function
//constants
//styled
const CreateVoucher_Content = () => {
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
            <CreateVoucher_Content_Header/>
            <Divider></Divider>
            <CreateVoucher_Content_Form/>
        </Layout>
    </Content>
  )
}

export default CreateVoucher_Content