require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

// Importer la connexion mongoDB
require('./db')

app.use(express.json())

// Intégerer les routes
const notesRoutes = require('./routes/notesRoutes')

app.use('/api/v1/notes', notesRoutes)

app.get('/', (req, res) => {
    res.send("Il n'y a rien à voir ici")
})

app.listen(port, () => { console.log( `Serveur démarré sur http://localhost:${port}` ) })