//node_modules
import { GetProp, Menu, MenuProps } from "antd"
import { Link } from "react-router-dom"
//components
import { iconQuanLyVoucher, iconTaoVoucher, iconVoucher } from "../../../../components/svg/iconDashboard"
//actions
//selector
//function
//constants
//styled


type MenuItem = GetProp<MenuProps, 'items'>[number]

const Voucher_Menu = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
   
  ): MenuItem => {
    return {
      label,
      key,
      icon,
    } as MenuItem;
  }
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  const items: MenuItem[] = [
    getItem(<Link to='/'>Voucher</Link>,'Voucher',iconVoucher()),
    getItem(<Link to='/create-voucher'>Tạo voucher</Link>,'Tạo voucher',iconTaoVoucher()),
    getItem(<Link to='/voucher-management'>Quản lý voucher</Link>,'Quản lý voucher',iconQuanLyVoucher())
  ]
  // -------------------------- MAIN --------------------------
  return (
    <Menu
    defaultSelectedKeys={['Voucher']}
    className="font-bold mr-10" 
    items={items}
    >
    </Menu>
  )
}

export default Voucher_Menu