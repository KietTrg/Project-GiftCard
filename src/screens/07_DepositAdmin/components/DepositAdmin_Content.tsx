//node_modules
import { Divider, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
//components
import DepositAdmin_Content_Header from "./componets/DepositAdmin_Content_Header"
import DepositAdmin_Content_Form from "./componets/DespositAdmin_Content_Form"
//actions
//selector
//function
//constants
//styled
const DepositAdmin_Content = () => {
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
                <DepositAdmin_Content_Header />
                <Divider></Divider>
                <DepositAdmin_Content_Form />
            </Layout>
        </Content>
    )
}

export default DepositAdmin_Content