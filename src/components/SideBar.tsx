//node_modules
import Sider from "antd/es/layout/Sider"
import { useSelector } from "react-redux"
import { RootState } from "../stores/index"
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
  const isShow = useSelector((state: RootState) => state.dashboard.isShow)

  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (

    <Sider
      trigger={null}
      breakpoint="lg"
      collapsedWidth={isShow ? 160 : 0}
      width='21%'
      style={{ minHeight: '100vh', position: 'fixed', zIndex: 60 }}
    >
      <SideLogo />
      {isAdmin ? <AdminMenu /> : <VoucherMenu />}
    </Sider>

  )
}

export default SideBar