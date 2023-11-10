const express = require('express')
const {
  createCustomer,
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer
} = require('../controllers/customerController')

const router = express.Router()

// GET all customers
router.get('/', getCustomers)

// GET a single customer
router.get('/:id', getCustomer)

// POST a new customer
router.post('/', createCustomer)

// DELETE a customer
router.delete('/:id', deleteCustomer)

// UPDATE a customer
router.patch('/:id', updateCustomer)
module.exports = router
