const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

// GET a /users para traer todos los usuarios
router.get('/', userController.getAllUsers)

// GET a /users para traer todos los usuarios
router.get('/:id', userController.getUserById)

// POST a /users para crear un usuario
router.post('/', userController.createuser)

module.exports = router