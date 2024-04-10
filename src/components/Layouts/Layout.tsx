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



//styled
const LayoutGiftCard = () => {
  const isLogin = false
  const isAdmin = false
  const userInfo = null




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
