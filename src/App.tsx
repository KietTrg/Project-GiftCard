//node_modules
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
//components
import Login_screens from "./screens/00_Login/Login_screens"
import LayoutGiftCard from "./components/Layouts/Layout"
import Voucher from "./screens/01_Voucher/Voucher_screens"
import VoucherCreate from "./screens/02_CreateVoucher/CreateVoucher_screens"
import VoucherManger from "./screens/03_ManageVoucher/MangerVoucher_screens"
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
        <Route path="/login" element={<Login_screens/>}></Route>
        <Route path="/" element={<LayoutGiftCard/>}>
          <Route path="/" element={<Voucher/>}></Route>
          <Route path="/create-voucher" element={<VoucherCreate/>}></Route>
          <Route path="/voucher-management" element={<VoucherManger/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
