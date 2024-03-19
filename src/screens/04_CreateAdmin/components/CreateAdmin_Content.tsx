//node_modules
import { Divider, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
//components
import CreateAdmin_Content_Form from "./components/CreateAdmin_Content_Form"
import CreateAdmin_Content_Header from "./components/CreateAdmin_Content_Header"
//actions
//selector
//function
//constants
//styled
const CreateAdmin_Content = () => {
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
        <CreateAdmin_Content_Header />
        <Divider></Divider>
        <CreateAdmin_Content_Form />
      </Layout>
    </Content>
  )
}

export default CreateAdmin_Content