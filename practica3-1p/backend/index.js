const express = require('express')
const {PrismaClient} = require('@prisma/client')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const prisma = new PrismaClient()

app.use(cors())
app.use(bodyParser.json())

app.get('/estudiantes', async(req, res) => {
  const estudiantes = await prisma.estudiante.findMany()
  return res.status(200).json(estudiantes)
})

app.get('/estudiante/:id', async(req, res) => {
  const estudiante = await prisma.estudiante.findFirst({
    where: {
      identificacion: req.body.id
    }
  })
  return res.status(200).json(estudiante)
})

app.post('/estudiante', async(req, res) => {
  const {representante, curso, name, identificacion} = req.body

  const estudiante = await prisma.estudiante.create({
    data: {
      representante,
      curso,
      name,
      identificacion,
    }
  })
  res.status(200).json(estudiante)
})

app.listen(3000, ()=>{
  console.log('init server');
})

module.exports = app