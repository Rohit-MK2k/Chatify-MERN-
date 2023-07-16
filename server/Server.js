const express = require("express")
const env = require("dotenv")
const connectDB = require("./Config/db")
const app = express()
env.config()
connectDB() 

const PORT = process.env.PORT


app.get("/", (req,res) => {
    res.send("From Backend")
})

app.listen(PORT,console.log(`Server is Started on ${PORT}`))