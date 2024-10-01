const express = require('express')
const userRoutes = require('./routes/userRoutes.js')
const app = express()
const port = 3000

// Middleware para parsear JSON
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)
// app.use('/productos', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})