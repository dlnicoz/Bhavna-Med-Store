require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { default: mongoose } = require('mongoose')

// express routes import form
const customerRoutes = require('./routes/customers')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// express routes
app.use('/api/customers', customerRoutes)

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(' connected to mongodb & server connected', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
