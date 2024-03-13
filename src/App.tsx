//node_modules
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
//components
import Login_screens from "./screens/00_Login/Login_screens"
import Voucher_screens from "./screens/01_Voucher/Voucher_screens"
import Voucher_Header from "./screens/01_Voucher/components/Voucher_Header"
import Voucher_Create from "./screens/01_Voucher/components/Voucher_Create"
import Voucher_Content from "./screens/01_Voucher/components/Voucher_Voucher"
import Voucher_Manger from "./screens/01_Voucher/components/Voucher_Manger"
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
        <Route path="/" element={<Voucher_screens/>}>
          <Route path="/" element={<Voucher_Content/>}></Route>
          <Route path="/create-voucher" element={<Voucher_Create/>}></Route>
          <Route path="/voucher-management" element={<Voucher_Manger/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
