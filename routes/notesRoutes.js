const express = require('express')
const router = express.Router()

// Importer le contrôller 
const notesControllers = require('../controllers/notesControllers')

// Importer les routes 
router.post('/', notesControllers.createNote)
router.get('/', notesControllers.getAllNotes)
router.get('/:id', notesControllers.getOneNote)
router.patch('/:id', notesControllers.updateNote)
router.delete('/:id', notesControllers.deleteNote)

module.exports = router