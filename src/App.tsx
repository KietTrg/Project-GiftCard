import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login_screens from "./screens/00_Login/Login_screens"


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login_screens/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
