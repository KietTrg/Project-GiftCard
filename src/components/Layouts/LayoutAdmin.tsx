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


const AdminLayout = () => {
    // -------------------------- VAR ---------------------------
    const dispatch = useAppDispatch()
    const { isAdmin, user } = useAuth()
    const { accessToken } = useGobalSelector()

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
    if (accessToken === null) {
        return <Navigate to="/login" />
    }
    // -------------------------- MAIN --------------------------

    return (
        <Layout className="min-h-screen">
            <SideBar isAdmin={isAdmin} />
            <Layout className={`xxl:ml-[21%] lg:ml-[21%] md:ml-0`}>
                <HeaderDashboard isLogin={accessToken} isAdmin={isAdmin} userInfo={user} />
                <Outlet></Outlet>
            </Layout>
        </Layout>
    )

}

export default AdminLayout