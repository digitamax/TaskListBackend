require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const app = express()

//connexion to DB
connectDB()

//Parsing request
app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json())

//importing routes
const taskRoutes = require('./routes/tasks')

//Defining routes
app.use('/api/tasks', taskRoutes)

app.listen(process.env.PORT, (req, res) =>{
    console.log("Listening on port "+process.env.PORT)
})

