//node_modules
import { Outlet } from "react-router-dom"
import { Layout } from 'antd'
import { useEffect, useState } from "react"
//components
import HeaderDashboard from "../HeaderDashboard"
import SideBar from "../SideBar"
//actions
//selector
//function
//constants
//context
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../stores"
import { getCurrent } from "../../stores/reducers/user_reducer"
import { ThunkDispatch } from "@reduxjs/toolkit"



//styled
const LayoutGiftCard = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { isLogin, userInfo, accessToken } = useSelector((state: RootState) => state.user)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  useEffect(() => {
    if (userInfo?.roles[0] === "admin") {
      setIsAdmin(true)
    }
  }, [userInfo])
  useEffect(() => {
    if (accessToken) {
      dispatch(getCurrent(accessToken))
    }
  }, [accessToken])

  return (

    <Layout className="min-h-screen">
      <SideBar isAdmin={isAdmin} />
      <Layout className={`xxl:ml-[21%] lg:ml-[21%] md:ml-0`}>
        <HeaderDashboard isLogin={isLogin} isAdmin={isAdmin} userInfo={userInfo} />
        <Outlet></Outlet>
      </Layout>
    </Layout>
  )
}

export default LayoutGiftCard
