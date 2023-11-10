const Customer = require('../model/customerModel')
const mongoose = require('mongoose')

// get all customers
const getCustomers = async (req, res) => {
  const customers = await Customer.find({}).sort({ createdAt: -1 })

  res.status(200).json(customers)
}

// get a single customer
const getCustomer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such customer' })
  }

  const customer = await Customer.findById(id)

  if (!customer) {
    return res.status(404).json({ error: 'No such customer' })
  }

  res.status(200).json(customer)
}

// create a new customer
const createCustomer = async (req, res) => {
  const { name, desc, phone, date } = req.body

  // add to the database
  try {
    const customer = await Customer.create({ name, desc, phone, date })
    res.status(200).json(customer)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a customer
const deleteCustomer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such customer' })
  }

  const customer = await Customer.findOneAndDelete({ _id: id })

  if (!customer) {
    return res.status(400).json({ error: 'No such customer' })
  }

  res.status(200).json(customer)
}

// update a customer
const updateCustomer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such customer' })
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!customer) {
    return res.status(400).json({ error: 'No such customer' })
  }

  res.status(200).json(customer)
}

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer
}
