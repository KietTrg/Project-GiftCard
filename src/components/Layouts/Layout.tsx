//node_modules
import { Outlet, useNavigate } from "react-router-dom"
import {Layout} from 'antd'
//components
import Header from "../Header"
import SideBar from "../SideBar"
import { AuthContext } from "../../context/authContext"
import { useContext, useEffect } from "react"
//actions
//selector
//function
//constants
//styled
const LayoutGiftCard = () => {
  const {isLogin, logout} =  useContext(AuthContext)
  
  
  return (<Layout className="min-h-screen relative">
          <SideBar/>
          <Layout>
            <Header isLogin={isLogin} logout={logout}/>
            <Outlet></Outlet>
          </Layout>
       </Layout>
    
      
        
      
  
     
  )
}

export default LayoutGiftCard
