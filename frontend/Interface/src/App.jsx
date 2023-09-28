import { Route, Routes } from "react-router-dom"
import AddCluster from "../pages/newCluster/addCluster"
import SignUp from "../pages/login/signUp"
import Login from "../pages/login/login"

const App = () => {
  return <Routes>
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/add-cluster" element={<AddCluster />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}
export default App