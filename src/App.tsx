//node_modules
import { Route, Routes } from "react-router-dom"
//components
import LoginScreens from "./screens/00_Login/Login_screens"
import LayoutGiftCard from "./components/Layouts/LayoutProvider"
import VoucherMangerScreens from "./screens/03_ManageVoucher/MangerVoucher_screens"
import VoucherScreens from "./screens/01_Voucher/Voucher_screens"
import CreateVoucherScreens from "./screens/02_CreateVoucher/CreateVoucher_screens"
import GeneralAdminScreens from "./screens/05_GeneralAdmin/GeneralAdmin_screens"
import AdminListScreens from "./screens/06_AdminList/AdminList_screens"
import CreateAdminScreens from "./screens/04_CreateAdmin/CreateAdmin_srceen"
import DepositAdminScreens from "./screens/07_DepositAdmin/DepositAdmin_screens"
import LayoutAdmin from "./components/Layouts/LayoutAdmin"
//actions
//selector
//function
//constants
//styled
function App() {

  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------

  return (
    <Routes>
      <Route path="/login" element={<LoginScreens />}></Route>
      <Route path="/" element={<LayoutGiftCard />}>
        <Route path="/" element={<VoucherScreens />}></Route>
        <Route path="/create-voucher" element={<CreateVoucherScreens />}></Route>
        <Route path="/voucher-management" element={<VoucherMangerScreens />}></Route>

      </Route>

      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="/admin" element={<CreateAdminScreens />} />
        <Route path="/admin/general" element={<GeneralAdminScreens />} />
        <Route path="/admin/admin-list" element={<AdminListScreens />} />
        <Route path="/admin/deposit" element={<DepositAdminScreens />} />
      </Route>
    </Routes>
  )
}

export default App
