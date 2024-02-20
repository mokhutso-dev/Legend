import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import './Auth.css'

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', { email,password})
        .then((result) => {
            console.log(result)
            if (result.data === "Success"){
                navigate('/')
            }
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-30">
                <h2>Login</h2>
                <p className="center">Enter your email below to login to your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" 
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password </strong>
                            {/* <Link className="forgot" to={"/register"}> Forgot your password?</Link> */}
                        </label>
                        <input type="password" 
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary">
                        Login
                    </button>
                    <button className="google-btn btn">
                        <Link className="google-link" to={""}>Login with Google</Link>
                    </button>
                    <p className="center">
                        Don't have an account? <Link className="p-text" to={"/register"}> Sign up</Link> 
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login