//node_modules
import { Content } from 'antd/es/layout/layout'
import { Layout } from 'antd'
//components
import GeneralAdminContentItems from './components/GeneralAdmin_Content_Items'
import GeneralAdminContentTable from './components/GeneralAdmin_Content_Table'
//actions
//selector
//function
//constants
//styled
const GeneralAdminContent = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Content className='p-8 '>
            <Layout className='p-6'>
                <GeneralAdminContentItems />
                <GeneralAdminContentTable />
            </Layout>
        </Content>
    )
}

export default GeneralAdminContent