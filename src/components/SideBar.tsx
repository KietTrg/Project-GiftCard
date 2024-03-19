//node_modules
import Sider from "antd/es/layout/Sider"
//components
import Voucher_Logo from "./SideBar/SideBar_Logo"
import Voucher_Menu from "./SideBar/SideBar_Menu"
import { Space } from "antd"
import Admin_Menu from "./SideBar/SideBar_Admin"
//actions
//selector
//function
//constants
//styled
type Props = {
  isAdmin: boolean
}
const Voucher_SideBar = ({isAdmin}: Props) => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Sider width="250px" className="relative" >
      <Space direction="vertical" className="flex-none fixed top-0 bottom-0 w-[250px]">
        <Voucher_Logo/>
        {isAdmin ?<Admin_Menu/> : <Voucher_Menu/>}
      </Space>
  </Sider>
  )
}

export default Voucher_SideBar