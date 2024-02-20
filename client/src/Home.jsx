import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.css'


function Home(){
    const navigate = useNavigate()
    // if (!authenticated){
    //     navigate('/login')
    // }

    const [tasks, SetTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getTasks')
        .then(tasks => SetTasks(tasks.data))
        .catch(err => console.log(err))
    }, [])


    return (
        <div className="body center bg-secondary vh-100">
            <div className="container p-3 rounded w-30">
                <div className="heading">
                    <h3>Tasks</h3>
                    <button className="add-btn btn">
                        <Link className="add-link" to={"/add"}> Add task</Link>
                    </button>
                </div>
                <div className="content center rounded">
                    {/* <div className="w-50"></div> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Task Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map(task => {
                                    return <tr>
                                        <td>{task.task}</td>
                                        <td>{task.description}</td>
                                        <td>{task.status}</td>
                                        <td>{task.date}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home