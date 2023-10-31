import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Auth_doctor from '../images/Auth_doctor.png'
import THCLogo from '../images/THC_Logo.png'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        profstatus();
    })

    const profstatus = async () => {
        axios.patch("/profile/profstatus/checker");
    }

    const loginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/account/login", {loginEmail, loginPassword});
            if(response.data.accountId){
                sessionStorage.setItem("accountId", response.data.accountId);
                sessionStorage.setItem("profileId", response.data.profileId);
                sessionStorage.setItem("workerType", response.data.workerType);
                toast.success("Successfully Logged In");
                navigate("/dashboard")
            } else{
                toast.error(response.data)
            }
        } catch (error) {   
            console.log(error);
        }
    }
    return (
        <div className="login_mainDiv">
            <div className="row login_mainDiv">
                <div className="col login_leftMainDiv">
                    <img src={Auth_doctor} alt='THC LOGO' width='80%' />
                </div>
                <div className="col login_rightMainDiv">
                    <img src={THCLogo} alt='THC LOGO' width='300px' />
                    <h1 className='login_rightMainDiv_header'>Welcome Back!</h1>
                    <form className='w-50' onSubmit={loginSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control rounded-pill" 
                                id="exampleInputEmail1"
                                value={loginEmail}
                                onChange={e => setLoginEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control rounded-pill" 
                                id="exampleInputPassword1"
                                value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)} />
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