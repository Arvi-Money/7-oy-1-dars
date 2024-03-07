import './style.css'
import user from '../assets/user (1).svg'
import lock from '../assets/lock.svg'

function Register() {
  return (
    <>
        <div className="card">
                <h1>Register</h1>
                <h3>Please enter your Name, Login and your Password</h3>
                <form>
                    <div className="inp-icon">
                        <input type="text" placeholder='Username'/>
                        <img src={user} alt="" />
                    </div>

                    <div className="inp-icon">
                        <input type="email" placeholder='Email'/>
                        <img src={user} alt="" />
                    </div>

                    <div className="inp-icon">
                        <input type="password" placeholder='Password'/>
                        <img src={lock} alt="" />
                    </div>

                    <div className="inp-icon">
                        <input type="password" placeholder='Re-enter password'/>
                        <img src={lock} alt="" />
                    </div>
                </form>
                <p>Forgot password?</p>
                <button className="btn">Register</button>
                <h5>Already have an Account <a href="/src/pages/Login.jsx">Login!</a></h5>
        </div>
    </>
  )
}

export default Register