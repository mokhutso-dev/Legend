import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import './Style.css'


function Home(){
    const navigate = useNavigate()
    // if (!authenticated){
    //     navigate('/login')
    // }

    const tasks = []

    return (
        <div className="body center bg-secondary vh-100">
            <div className="container p-3 rounded w-30">
                <div className="heading">
                    <h3>Tasks</h3>
                    <button className="add-btn btn">
                        <Link className="add-link" to={"/add"}> Add task</Link>
                    </button>
                </div>
                <div className="content p-3 rounded">
                    <tr className="tr">
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </div>
            </div>
        </div>
    )
}

export default Home