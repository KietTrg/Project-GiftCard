//node_modules
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
//components
import Login_screens from "./screens/00_Login/Login_screens"
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
      </Routes>
    </Router>
  )
}

export default App
