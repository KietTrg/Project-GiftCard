//node_modules
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Col, Dropdown, Flex, Row, Space, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import { show } from "../stores/reducers/dashboard_reducer"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RootState } from "../stores"
import { logoutUser } from "../stores/reducers/user_reducer"
import { apiUserLogout } from "../api"
//components
//actions
//selector
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
  isLogin: boolean;
  isAdmin: boolean;
  userInfo: UserInfo | null;
}
const HeaderDashboard = ({ isLogin, isAdmin, userInfo }: Props) => {
  // -------------------------- VAR ---------------------------
  const pathname = useLocation()
  const navigate = useNavigate()

  // -------------------------- STATE -------------------------
  const [changeName, setChangeName] = useState<string>('Voucher')
  // -------------------------- REDUX -------------------------
  const dispatch = useDispatch()
  const { isShow } = useSelector((state: RootState) => state.dashboard)
  // -------------------------- FUNCTION ----------------------
  const handleShow = () => {
    dispatch(show())
  }
  const logout = async () => {
    try {

      // await apiUserLogout()
      localStorage.removeItem('accessToken')
      dispatch(logoutUser({}))
      navigate('/login')
    } catch (error) {
      console.log('error: ', error);

    }
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
                <Button style={{ border: 'none' }} onClick={logout}>Đăng xuất</Button>
              )
            }]
          }}><img className=" w-[35px] h-[40px]" src={isAdmin ? "../images/Icon_Group.png" : userInfo?.logo}></img></Dropdown>}
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderDashboard