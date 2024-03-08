import './style.css'
import user from '../assets/user (1).svg'
import lock from '../assets/lock.svg'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <>
        <div className="card">
                <h1>Register</h1>
                <h3>Please enter your Name, Login and your Password</h3>
                <form>
                    <div className="inp-icon">
                        <img src={user} alt="" />
                        <input type="text" placeholder='Username'/>
                    </div>

                    <div className="inp-icon">
                        <img src={user} alt="" />
                        <input type="email" placeholder='Email'/>
                    </div>

                    <div className="inp-icon">
                        <img src={lock} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>

                    <div className="inp-icon">
                        <img src={lock} alt="" />
                        <input type="password" placeholder='Re-enter password'/>
                    </div>
                </form>
                <p>Forgot password?</p>
                <button className="btn">Register</button>
                <h5>Already have an Account <NavLink to="/login"><a>Login!</a></NavLink></h5>
        </div>
    </>
  )
}

export default Register