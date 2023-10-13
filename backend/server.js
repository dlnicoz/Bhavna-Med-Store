require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ mssg: 'hi dheeraj its json msg' })
})

app.listen(process.env.PORT, () => {
  console.log('server connected')
})
