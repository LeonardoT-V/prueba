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
  return res.status(400).json(estudiantes)
})
app.get('/qq', async(req, res) => {
  return res.status(200).send('ewon')
})
app.post('estudiante', async(req, res) => {
  const estudiante = await prisma.estudiante.create({
  })
  // const estudiante = await prisma.estudiante.create({
  //   data: {
  //     representante: 'jenny',
  //     curso: '9B',
  //     name: 'Juan',
  //     identificacion: '13131531',
  //   }
  // })
  res.send(estudiante)
})

app.get('estudiante/:id', async(req, res) => {
  const estudiante = await prisma.estudiante.findUnique({
    where: {
      identificacion: req.params.id
    }
  })

  res.send(estudiante)
})

app.get('/evaluaciones', async(req, res) => {
  const evaluaciones = await prisma.evaluacion.findMany()
  res.send(evaluaciones)
})

app.post('evaluacion', async(req, res) => {
  const estudiante = await prisma.estudiante.create({

  })
  res.send(estudiante)
})

app.get('evaluaciones/:id', async(req, res) => {
  const estudiante = await prisma.estudiante.findUnique({
    where: {
      identificacion: req.params.id
    }
  })

  res.send(estudiante)
})

app.post('form', async(req, res) => {
  const estudiante = await prisma.registro.create({
    data: {
      estudiante:{
        create: {

        }
      }
    }
  })
})

app.listen(3000, ()=>{
  console.log('init server');
})
