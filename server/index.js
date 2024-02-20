require('dotenv').config()
const express = require("express")
const cors = require("cors")
const User = require("./models/User")
const Task = require("./models/Task")
const dbConnect = require("./config/dbConnect")


const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

dbConnect()

app.post('/login', async (req,res) => {
    const {email, password} = req.body
    const find = await User.findOne({email: email})
    // res.json(find)
    .then (user => {
        if (user) {
            if (user.password === password){
                res.json("Success")
            }else {
                res.json("the password is incorrect")
            }
        } else{
            res.json("No record")
            // alert or notification
        }
    })
})

app.post('/register', (req,res) => {
    User.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))

    console.log("Account registration done!")
})

app.post('/add', (req,res) => {
    Task.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err))

    console.log("Task added successfully")
})


app.listen(port, async() =>{
    console.log(`Legend server is up and running on port ${port}`)
})

