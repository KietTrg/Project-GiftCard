//node_modules
import Sider from "antd/es/layout/Sider"
//components
import Voucher_Logo from "./components/Voucher_SideBar_Logo"
import Voucher_Menu from "./components/Voucher_SideBar_Menu"
//actions
//selector
//function
//constants
//styled
const Voucher_SideBar = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Sider width="250px" className="relative" >
      <div className="flex-none fixed top-0 bottom-0 w-[250px]">
        <Voucher_Logo/>
        <Voucher_Menu/>
      </div>
  </Sider>
  )
}

export default Voucher_SideBar