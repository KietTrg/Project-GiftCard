//node_modules
import { Divider, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
//components
import DepositAdminContentForm from "./componets/DespositAdmin_Content_Form"
import DepositAdminContentHeader from "./componets/DepositAdmin_Content_Header"
//actions
//selector
//function
//constants
//styled
const DepositAdminContent = () => {
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
                <DepositAdminContentHeader />
                <Divider></Divider>
                <DepositAdminContentForm />
            </Layout>
        </Content>
    )
}

export default DepositAdminContent