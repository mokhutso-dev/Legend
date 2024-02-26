require('dotenv').config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

app.use(cors())

const port = 5000


app.get('/', (req, res) => {
    res.json("Welcome to my task manager api")
})



app.listen(port, async() =>{
    console.log(`Legend server is up and running on port ${port}`)
})

