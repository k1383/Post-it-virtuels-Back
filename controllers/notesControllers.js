const Note = require('../models/notesModels')

exports.createNote = async (req, res) => {
    try {
        const { title, text, color } = req.body
        const notes = new Note({ title, text, color })
        await notes.save()
        res.status(201).json({ notes })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
        res.status(200).json(notes)
    } catch (err) {
        res.status(501).json({ error: err.message})
    }
}

exports.getOneNote = async (req, res) => {
    try {
        // Trouver une note par son ID et renvoyer une erreur 404 si la note existe pas 
        const note = await Note.findById(req.params.id)
        if(note === null) return res.status(404).json({ message: "Element not found"})
        res.status(200).json(note)
    } catch (err) {
        res.status(501).json({ error: err.message})
    }
}

exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if(note === null) return res.status(404).json({ message: "Element not found"})
        
        if(req.body.title != null){
            note.title = req.body.title
        }
        if(req.body.text != null){
            note.text = req.body.text
        }
        if(req.body.color != null) {
            note.color = req.body.color
        }

        const updateNote = await note.save()
        res.json(updateNote)

    } catch (err) {
        res.status(501).json({ error: err.message})
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if(note === null) return res.status(404).json({ message: "Element not found"})
        await note.deleteOne()
        res.json({ message: "Note supprimé"})
    } catch (err) {
        res.status(501).json({ error: err.message})
    }
}