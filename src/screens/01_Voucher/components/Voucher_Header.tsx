//node_modules
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Dropdown, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
//components
//actions
//selector
//function
//constants
//styled
const Voucher_Header = () => {
 // -------------------------- VAR ---------------------------
 const pathname = useLocation()
 // -------------------------- STATE -------------------------
 const [changeName, setChangeName] = useState<string>('Voucher')
 // -------------------------- REDUX -------------------------
 // -------------------------- FUNCTION ----------------------
 // -------------------------- EFFECT ------------------------
  useEffect(()=>{
    if(pathname.pathname == '/'){
      setChangeName('Voucher')
    }
    if(pathname.pathname == '/create-voucher'){
      setChangeName('Tạo Voucher')
    }
    if(pathname.pathname == '/voucher-management'){
      setChangeName('Quản lý voucher')
    }
  },[pathname])
 // -------------------------- RENDER ------------------------
 // -------------------------- MAIN --------------------------
  return (
    <Header className="bg-white h-[79px] flex items-center justify-between">
        <Typography.Title level={2} style={{color:'GrayText'}}>{changeName as string}</Typography.Title>
            <Dropdown menu={{items:[{
              key: '1',
              label:(
                <Link to='/login'>Đăng xuất</Link>
              )
            }]}}><img className="rounded-full w-[40px] h-[40px]" src="../images/Logo_Header.png"></img></Dropdown>
    </Header>
  )
}

export default Voucher_Header