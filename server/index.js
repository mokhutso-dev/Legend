require('dotenv').config()
const express = require("express")

const userConnect = require("./config/userConnect")

const app = express()
const port = process.env.PORT || 3000

userConnect()

app.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`)
})

