//node_modules
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Dropdown, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
//components
//actions
//selector
//function
//constants
//styled
type Props = {
  isLogin: boolean;
  logout: () => void
}
const Voucher_Header = ({isLogin, logout}: Props) => {
 // -------------------------- VAR ---------------------------
 const pathname = useLocation()
 const navigate = useNavigate()

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
  useEffect(()=>{
    if(!isLogin){
      navigate('/login')
    }
  },[isLogin])
 // -------------------------- RENDER ------------------------
 // -------------------------- MAIN --------------------------
  return (
    <Header className="bg-white h-[79px] flex items-center justify-between">
        <Typography.Title level={2} style={{color:'GrayText'}}>{changeName as string}</Typography.Title>
            {isLogin && <Dropdown menu={{items:[{
              key: '1',
              label:(
                <Button style={{border:'none'}} onClick={logout}>Đăng xuất</Button>
              )
            }]}}><img className="rounded-full w-[40px] h-[40px]" src="../images/Logo_Header.png"></img></Dropdown>}
    </Header>
  )
}

export default Voucher_Header