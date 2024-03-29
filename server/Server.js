const express = require("express")
const env = require("dotenv")
const connectDB = require("./Config/db")
const userRoutes = require("./routes/userRoutes")
const { errorHandle, notFound } = require("./middleware/errorMiddleware")
const app = express()
env.config()
connectDB() 

const PORT = process.env.PORT


app.get("/", (req,res) => {
    res.send("From Backend")
})

app.use(express.json())

app.use(notFound)
app.use(errorHandle)

app.use("/api/user",userRoutes)

app.listen(PORT,console.log(`Server is Started on ${PORT}`))