//node_modules
import { Outlet } from "react-router-dom"
import { Layout } from 'antd'
import { useContext } from "react"
//components
import HeaderDashboard from "../HeaderDashboard"
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


  return (

    <Layout className="min-h-screen">
      <SideBar isAdmin={isAdmin} />
      <Layout className={`xxl:ml-[21%] lg:ml-[21%] md:ml-0`}>
        <HeaderDashboard isLogin={isLogin} logout={logout} isAdmin={isAdmin} />
        <Outlet></Outlet>
      </Layout>
    </Layout>
  )
}

export default LayoutGiftCard
