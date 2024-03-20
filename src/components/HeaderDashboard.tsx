//node_modules
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Col, Dropdown, Flex, Row, Space, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import { show } from "../stores/reducers/dashboard_reducer"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RootState } from "../stores"
//components
//actions
//selector
//function
//constants
//styled
type Props = {
  isLogin: boolean;
  isAdmin: boolean;
  logout: () => void
}
const HeaderDashboard = ({ isLogin, isAdmin, logout }: Props) => {
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
  useEffect(() => {
    if (!isLogin) {
      navigate('/login')
    }
  }, [isLogin])
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Header className="bg-white h-[79px] flex items-center justify-between">

      <Typography.Title level={2} style={{ color: 'GrayText' }}>{changeName as string}</Typography.Title>

      <Row align='middle' justify='center'>
        <Col xl={0}><Button onClick={handleShow} className="border-0 items-center flex ">{isShow ? <AiOutlineMenuFold size={25} /> : <AiOutlineMenuUnfold size={25} />}</Button></Col>

        <Col xl={24}>
          {isLogin && <Dropdown menu={{
            items: [{
              key: '1',
              label: (
                <Button style={{ border: 'none' }} onClick={logout}>Đăng xuất</Button>
              )
            }]
          }}><img className=" w-[35px] h-[40px]" src={isAdmin ? "../images/Icon_Group.png" : "../images/Logo_Header.png"}></img></Dropdown>}
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderDashboard