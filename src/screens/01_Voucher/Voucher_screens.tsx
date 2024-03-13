//node_modules
import { Outlet } from "react-router-dom"
import {  Layout } from "antd"
//components
import Voucher_Header from "./components/Voucher_Header"
import Voucher_SideBar from "./components/Voucher_SideBar"
//actions
//selector
//function
//constants
//styled
const Voucher_screens = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Layout className="min-h-screen relative">
      <Voucher_SideBar/>
      <Layout>
        <Voucher_Header/>
        <Outlet></Outlet>
      </Layout>
  </Layout>
  )
}

export default Voucher_screens