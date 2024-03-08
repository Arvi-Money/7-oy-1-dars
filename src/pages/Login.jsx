import './style.css'
import user from '../assets/user (1).svg'
import lock from '../assets/lock.svg'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="card">
                <h1>Login</h1>
                <h3>Please enter your Username and your Password</h3>
                <form>
                    <div className="inp-icon">
                        <img src={user} alt="" />
                        <input type="text" placeholder='Username'/>
                    </div>

                    <div className="inp-icon">
                        <img src={lock} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </form>
                <p>Forgot password?</p>
                <button className="btn">Login</button>
                <h5>Not a member yet?<NavLink to="/register"><a>Register!</a></NavLink></h5>
        </div>
    </>
  )
}

export default Login