import './App.css'
import { Routes, Route, useNavigate, redirect} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function App() {
const [token, setToken] = useState(localStorage.getItem('token'));
const navigate = useNavigate();

function ProtectedRoute({children, redirect = './login' isAuthentivation}) {
  if (!isAuthentivation) {
    navigate(redirect);
  }

  return children
}

useEffect{() => {
  if (localStorage.getItem('token')) {
    navigate('/login')
  }
  
}, []}

  return (
    <>
     <Routes>
       {/* Public routes */}
       {!token && }
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </>
  )
}

export default App
