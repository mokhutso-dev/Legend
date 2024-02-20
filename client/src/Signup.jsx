import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import './Auth.css'

function Signup(){
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/register', {name,surname,email,password})
        .then((result) => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-30">
            <h2>Register</h2>
                <p className="center">Enter your details to register your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" 
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="name"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Surname</strong>
                        </label>
                        <input type="text" 
                        placeholder="Enter Surname"
                        autoComplete="off"
                        name="surname"
                        className="form-control rounded-0"
                        onChange={(e) => setSurname(e.target.value)} 
                        />
                    </div>
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
                        <label htmlFor="email">
                            <strong>Password</strong>
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
                        Register
                    </button>
                </form>
                <p className="center">
                    Already have an account?    <Link className="p-text" to={"/login"}>Login</Link> 
                </p>
            </div>
        </div>
    )
}

export default Signup