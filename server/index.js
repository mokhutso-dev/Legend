require('dotenv').config()
const express = require("express")
const cors = require("cors")
// const User = require("./models/User")
// const Task = require("./models/Task")
// const dbConnect = require("./config/dbConnect")


const app = express()
app.use(express.json())

app.use(cors({
    // origin: ["https://legend-eta.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true

}))

const port = process.env.PORT || 5010

// dbConnect()


app.get('/', (req, res) => {
    res.json("Welcome to my task manager api")
})



app.listen(port, async() =>{
    console.log(`Legend server is up and running on port ${port}`)
})

