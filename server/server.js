require("dotenv").config()

const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const dataRoutes = require("./routes/dataRoutes")

// express app
const app = express()

// middleware
const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}

// middleware
app.use(cors(corsOptions));
app.use(express.json())

// routes
app.use("/api/data", dataRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
    })
  })
  .catch((error) => {
    console.log(error)
  })