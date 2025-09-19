require('dotenv').config()
port=3000
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("Il n'y a rien à voir ici")
})

app.listen(port, () => { console.log( `Serveur démarré sur http://localhost:${port}` ) })