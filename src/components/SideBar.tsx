//node_modules
import Sider from "antd/es/layout/Sider"
//components
import AdminMenu from "./SideBar/SideBar_Admin"
import VoucherMenu from "./SideBar/SideBar_Menu"
import SideLogo from "./SideBar/SideBar_Logo"
//actions
//selector
//function
//constants
//styled
type Props = {
  isAdmin: boolean;

}
const SideBar = ({ isAdmin }: Props) => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (

    <Sider
      breakpoint="xl"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      width='15%'
      style={{ minHeight: '100vh', left: 0, top: 0, bottom: 0 }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <SideLogo />
      {isAdmin ? <AdminMenu /> : <VoucherMenu />}

    </Sider>

  )
}

export default SideBar