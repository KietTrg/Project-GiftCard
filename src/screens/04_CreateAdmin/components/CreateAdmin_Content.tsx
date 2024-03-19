//node_modules
import { Divider, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
//components
import CreateAdminContentHeader from "./components/CreateAdmin_Content_Header"
import CreateAdminContentForm from "./components/CreateAdmin_Content_Form"
//actions
//selector
//function
//constants
//styled
const CreateAdminContent = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Content className='p-8' >
      <Layout className='p-6 bg-white rounded-md'>
        <CreateAdminContentHeader />
        <Divider></Divider>
        <CreateAdminContentForm />
      </Layout>
    </Content>
  )
}

export default CreateAdminContent