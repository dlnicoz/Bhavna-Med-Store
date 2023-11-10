const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema)

