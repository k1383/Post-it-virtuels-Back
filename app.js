require('dotenv').config()
port=3000
const express = require('express')
const app = express()

// Importer la connexion mongoDB
require('./db')

// Intégerer les routes
const notesRoutes = require('./routes/notesRoutes')

app.get('/', (req, res) => {
    res.send("Il n'y a rien à voir ici")
})

app.listen(port, () => { console.log( `Serveur démarré sur http://localhost:${port}` ) })