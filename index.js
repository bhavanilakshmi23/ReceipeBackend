const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express()
app.use(cors())

const PORT = process.env.PORT

const indexRouter = require('./router/index')
const userRouter = require('./router/user')
const receipeRouter = require('./router/receipe')

app.use(express.json())

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/receipe',receipeRouter)

app.listen(PORT,()=>console.log("App is listening port "+PORT))
