//node_modules
import { Navigate, Outlet } from "react-router-dom"
import { Layout } from 'antd'
//components
import HeaderDashboard from "../HeaderDashboard"
import SideBar from "../SideBar"
//actions
import { useAuth } from "../../context/authContext"
import { useGobalSelector } from "../../api/selector"
import { useEffect } from "react"
import { useAppDispatch } from "../../stores"
import { getProvider } from "../../stores/reducers/user/user_actions"
//selector
//function
//constants
//context
//styled
const LayoutGiftCard = () => {
  // -------------------------- VAR ---------------------------
  const { token, isAdmin, user } = useAuth()
  const { accessToken, roles } = useGobalSelector()
  const dispatch = useAppDispatch()
  console.log('isAdmin: ', isAdmin);
  console.log('roles: ', roles);
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  useEffect(() => {
    if (accessToken) {

      dispatch(getProvider(accessToken))
    }
  }, [accessToken])
  // -------------------------- RENDER ------------------------
  if (accessToken && isAdmin === "admin") {
    return <Navigate to="/admin" />
  } else if (accessToken === null || isAdmin === 'admin') {
    return <Navigate to="/login" />
  }
  // -------------------------- MAIN --------------------------

  return (
    <Layout className="min-h-screen">
      <SideBar isAdmin={isAdmin} />
      <Layout className={`xxl:ml-[21%] lg:ml-[21%] md:ml-0`}>
        <HeaderDashboard isLogin={token} isAdmin={isAdmin} userInfo={user} />
        <Outlet></Outlet>
      </Layout>
    </Layout>

  )



}

export default LayoutGiftCard
