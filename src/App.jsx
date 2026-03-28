import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import AddEmployee from "./Components/AddEmployee"
import ViewEmployeeById from "./Components/ViewEmployeeById"
import ViewEmployee from "./Components/ViewEmployee"
import EditEmployee from "./Components/EditEmployee"
import DeleteEmployee from "./Components/DeleteEmployee"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Logout from "./Components/Logout"
import Register from "./Components/Register"

function App() {

  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/add' Component={AddEmployee}/>
      <Route path='/view' Component={ViewEmployee}/>
      <Route path='/edit/:id' Component={EditEmployee}/>
      <Route path='/view/:id' Component={ViewEmployeeById}/>
      <Route path='/delete/:id' Component={DeleteEmployee}/>
      <Route path='/login' Component={Login}/>
      <Route path='/logout' Component={Logout}/>
      <Route path='/register' Component={Register}/>
    </Routes>
  )
}

export default App
