//node_modules
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
//components
import Login_screens from "./screens/00_Login/Login_screens"
import LayoutGiftCard from "./components/Layouts/Layout"
import Voucher from "./screens/01_Voucher/Voucher_screens"
import VoucherCreate from "./screens/02_CreateVoucher/CreateVoucher_screens"
import VoucherManger from "./screens/03_ManageVoucher/MangerVoucher_screens"
import CreateAdmin from "./screens/04_CreateAdmin/CreateAdmin_srceen"
import GeneralAdmin from "./screens/05_GeneralAdmin/GeneralAdmin_screens"
import AdminList from "./screens/06_AdminList/AdminList_screens"
import DepositAdmin from "./screens/07_DepositAdmin/DepositAdmin_screens"
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
    <Router>
      <Routes>
        <Route path="/login" element={<Login_screens />}></Route>
        <Route path="/" element={<LayoutGiftCard />}>
          <Route path="/" element={<Voucher />}></Route>
          <Route path="/create-voucher" element={<VoucherCreate />}></Route>
          <Route path="/voucher-management" element={<VoucherManger />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutGiftCard />}>
          <Route path="/admin" element={<CreateAdmin />} />
          <Route path="/admin/general" element={<GeneralAdmin />} />
          <Route path="/admin/admin-list" element={<AdminList />} />
          <Route path="/admin/deposit" element={<DepositAdmin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
