import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import PrivateRoute from "./pages/PrivateRoute"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/profile" element={<PrivateRoute component={<Profile></Profile>}></PrivateRoute>}></Route>
    </Routes>
  )
}

export default App
