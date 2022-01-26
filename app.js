const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')





const PORT = 8000
app.listen(PORT, console.log('hello my booking' + ' ' + `you are listen at ${PORT}`))

dotenv.config()
mongoose.connect(process.env.DB, )
.then(() => {console.log('connect to db')})
.catch((err) => {console.log(err)})

app.use(express.json())
const authroute = require('./routes/auth')
app.use('/', authroute)

const posts = require('./routes/posts')
app.use('/', posts)


