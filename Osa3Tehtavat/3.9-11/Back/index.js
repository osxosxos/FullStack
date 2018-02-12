const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
    },
    {
        name: 'Martti Tienari',
        number: '040-123456',
        id: 2,
    },
    {
        name: 'Arto Järvinen',
        number: '040-123456',
        id: 3,
    },
    {
        name: 'Lea Kutvonen',
        number: '040-123456',
        id: 4,
    },
];

const info = () => {
    return `
      <div>
          <p>puhelinluettelossa on nyt nimiä: ${persons.length}</p>
          <p>tänään on: ${Date()}</p>
      </div>
    `
}

const generateId = () => {
    const id = Math.floor(Math.random()*100000)
    const id2 = Math.floor(Math.random()*100000)
    const superid = id + "3" + id2
    return Number(superid)
}
  
app.post('/persons', (req, res) => {
    const body = req.body
    console.log(body)
    const person = {
      name: body.name,
      number: body.number,
      id: generateId()
    }

    if ( body.name === null ) {
        res.status(404).end("nimi puuttuu!")
    } else if (body.number === null) {
        res.status(404).end("numero puuttuu!")
    } else if (persons.find((person) => person.name === body.name) != null) {
        res.status(404).end("nimi on jo luettelossa!")
    } else {
        persons = persons.concat(person)
        res.json(person)
    }
})

app.put('/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    const updPerson = {
        name: body.name,
        number: body.number,
        id: id
    }
    persons = persons.map(person => person.id !== id ? person : updPerson)
    res.json(updPerson)
})

app.delete('/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id) 
    res.status(204).end()
})

app.get('/info', (req, res) => {
  res.send(info())
})

app.get('/persons', (req, res) => {
    res.send(persons)
})

app.get('/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id == id )

    if ( person ) {
        res.send(person)
    } else {
        res.status(404).end()
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})