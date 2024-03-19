//node_modules
import { Outlet } from "react-router-dom"
import { Layout } from 'antd'
import { useContext } from "react"
//components
import Header from "../Header"
import SideBar from "../SideBar"
//actions
//selector
//function
//constants
//context
import { AuthContext } from "../../context/authContext"
//styled
const LayoutGiftCard = () => {
  const { isLogin, logout, isAdmin } = useContext(AuthContext)
  return (<Layout className="min-h-screen relative">
    <SideBar isAdmin={isAdmin} />
    <Layout>
      <Header isLogin={isLogin} logout={logout} isAdmin={isAdmin} />
      <Outlet></Outlet>
    </Layout>
  </Layout>
  )
}

export default LayoutGiftCard
