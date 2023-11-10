const express = require('express')
const {
  createCustomer,
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer
} = require('../controllers/customerController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all customer routes
router.use(requireAuth)

// GET all customers
router.get('/', getCustomers)

//GET a single customer
router.get('/:id', getCustomer)

// POST a new customer
router.post('/', createCustomer)

// DELETE a customer
router.delete('/:id', deleteCustomer)

// UPDATE a customer
router.patch('/:id', updateCustomer)


module.exports = router