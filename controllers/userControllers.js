// Controlador para traer todos los usuarios
const getAllUsers = (req, res) => {
    res.send('Aca estan todos los usuarios')
  }
  
  const getUserById = (req, res) => {
    const userId = req.params.id
    res.send(`Aca esta el usuario que solicitaste: ${userId}`)
  }
  
  const createuser = (req, res) => {
    res.send('Creando un nuevo usuario...')
  }
  
  module.exports = { getAllUsers, createuser, getUserById }