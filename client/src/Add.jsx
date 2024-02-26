import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import './Auth.css'

function Add(){
    const [task, setTask] = useState()
    const [description, setDescription] = useState()
    const [status, setStatus] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://legend-sable.vercel.app/add', {task,description,status,date})
        .then((result) => {console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-30">
            <h2>Add Task</h2>
                {/* <p className="center">Enter your details to register your account</p> */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="task">
                            <strong>Task Name</strong>
                        </label>
                        <input type="text" 
                        placeholder="Enter Task Name"
                        autoComplete="off"
                        name="task"
                        required
                        className="form-control rounded-0"
                        onChange={(e) => setTask(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">
                            <strong>Description</strong>
                        </label>
                        <br />
                        <textarea name="description" 
                        id="description"
                        cols="30" 
                        rows="2"
                        placeholder="Enter Description"
                        required
                        className="form-control rounded-0"
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status">
                            <strong>Status</strong>
                        </label>
                        <br />
                        <select name="status"
                        required
                        className="form-control rounded-0"
                        onChange={(e) => setStatus(e.target.value)} >
                            <option value="" disabled selected>Select Status</option>
                            <option value="progress">In progress</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date">
                            <strong>Due Date</strong>
                        </label>
                        <input type="date" 
                        placeholder="Enter Due Date"
                        autoComplete="off"
                        name="date"
                        required
                        className="form-control rounded-0" 
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary">
                        Add Task
                    </button>
                </form>
                
                <Link className="view-link" to={"/"}>View Tasks</Link> 
                
            </div>
        </div>
    )
}

export default Add