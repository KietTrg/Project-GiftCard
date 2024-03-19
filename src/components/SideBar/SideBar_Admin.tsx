//node_modules
import { GetProp, Menu, MenuProps } from "antd"
import { Link } from "react-router-dom"
//components
import { iconAdminList, iconCreateAdmin, iconDeposit, iconGeneral } from "../svg/iconDashboard"
//actions
//selector
//function
//constants
//styled


type MenuItem = GetProp<MenuProps, 'items'>[number]

const AdminMenu = () => {
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
    getItem(<Link to='/admin/general'  >Tổng quan</Link>, 'general', iconGeneral()),
    getItem(<Link to='/admin'>Tạo admin</Link>, 'Create-admin', iconCreateAdmin()),
    getItem(<Link to='/admin/admin-list'>Danh sách Admin</Link>, 'admin-list', iconAdminList()),
    getItem(<Link to='/admin/deposit'>Ký quỹ</Link>, 'deposit', iconDeposit())
  ]
  // -------------------------- MAIN --------------------------

  return (


    <Menu
      mode="inline"
      defaultSelectedKeys={['Create-admin']}
      style={{ paddingRight: 20 }}
      items={items}
    >
    </Menu>

  )
}

export default AdminMenu