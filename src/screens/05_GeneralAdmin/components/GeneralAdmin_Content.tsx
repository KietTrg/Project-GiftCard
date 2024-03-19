//node_modules
import { Content } from 'antd/es/layout/layout'
import { Layout } from 'antd'
//components
import GeneralAdmin_Content_Items from './components/GeneralAdmin_Content_Items'
import GeneralAdmin_Content_Table from './components/GeneralAdmin_Content_Table'
//actions
//selector
//function
//constants
//styled
const GeneralAdmin_Content = () => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------
    return (
        <Content className='p-8'>
            <Layout className='p-6'>
                <GeneralAdmin_Content_Items />
                <GeneralAdmin_Content_Table />
            </Layout>
        </Content>
    )
}

export default GeneralAdmin_Content