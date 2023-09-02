import React from 'react'
import { Link } from 'react-router-dom'
import Auth_doctor from '../images/Auth_doctor.png'
import THCLogo from '../images/THC_Logo.png'

const Login = () => {
  return (
    <div className="login_mainDiv">
        <div className="row login_mainDiv">
            <div className="col login_leftMainDiv">
                <img src={Auth_doctor} alt='THC LOGO' width='80%' />
            </div>
            <div className="col login_rightMainDiv">
                <img src={THCLogo} alt='THC LOGO' width='300px' />
                <h1 className='login_rightMainDiv_header'>Welcome Back!</h1>
                <form className='w-50'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control rounded-pill" id="exampleInputPassword1" />
                    </div>
                    <div className="d-grid gap-2 w-50 m-auto">
                        <button type="submit" className="btn btn-lg">Login</button>
                    </div>
                    <p className='link'>Don't have an account? <Link to='/register' className='linkText'>Sign up</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login