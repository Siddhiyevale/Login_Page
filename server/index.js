const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

dotenv.config();
const app = express()
app.use(express.json());

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB",err))

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})