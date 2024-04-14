//node_modules
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Button, Col, Dropdown, Row, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import { show } from "../stores/reducers/nav/nav_slice"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RootState } from "../stores"
//components
//actions
//selector
import { useAuth } from "../context/authContext"
//function
//constants
//styled
interface UserInfo {
  address: string;
  brandName: string;
  description: string;
  finalizationPaid: number;
  isActive: boolean;
  logo: string;
  roles: string[];
  username: string;
  _id: string;
}
type Props = {
  isLogin: string | null;
  isAdmin: string | undefined;
  userInfo: UserInfo | null;
}
const HeaderDashboard = ({ isLogin, isAdmin, userInfo }: Props) => {
  // -------------------------- VAR ---------------------------
  const pathname = useLocation()
  const { logoutUser } = useAuth()
  // -------------------------- STATE -------------------------
  const [changeName, setChangeName] = useState<string>('Voucher')
  // -------------------------- REDUX -------------------------
  const dispatch = useDispatch()
  const { isShow } = useSelector((state: RootState) => state.nav)
  // -------------------------- FUNCTION ----------------------
  const handleShow = () => {
    dispatch(show())
  }
  const handleLogout = () => {
    logoutUser()
  }
  // -------------------------- EFFECT ------------------------
  useEffect(() => {
    if (pathname.pathname == '/') {
      setChangeName('Voucher')
    }
    if (pathname.pathname == '/create-voucher') {
      setChangeName('Tạo Voucher')
    }
    if (pathname.pathname == '/voucher-management') {
      setChangeName('Quản lý voucher')
    }
    if (pathname.pathname == '/admin') {
      setChangeName('Tạo Admin')
    }
    if (pathname.pathname == '/admin/general') {
      setChangeName('Tổng quan')
    }
    if (pathname.pathname == '/admin/admin-list') {
      setChangeName('Danh sách Admin')
    }
    if (pathname.pathname == '/admin/deposit') {
      setChangeName('Kí quỹ')
    }
  }, [pathname])
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Header className="bg-white h-[79px] flex items-center justify-between">

      <Typography.Title level={2} style={{ color: 'GrayText' }}>{changeName as string}</Typography.Title>

      <Row align='middle' justify='center'>
        <Col xl={0} lg={0}><Button onClick={handleShow} className="border-0 items-center flex ">{isShow ? <AiOutlineMenuFold size={25} /> : <AiOutlineMenuUnfold size={25} />}</Button></Col>

        <Col xl={24}>
          {isLogin && <Dropdown menu={{
            items: [{
              key: '1',
              label: (
                <Button style={{ border: 'none' }} onClick={handleLogout}>Đăng xuất</Button>
              )
            }]
          }}><img className=" w-[35px] h-[40px]" src={isAdmin === "admin" ? "../images/Icon_Group.png" : userInfo?.logo}></img></Dropdown>}
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderDashboard