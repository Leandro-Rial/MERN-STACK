const notesCtrl = {};

const Note = require('../models/Note')

// ALL NOTES
notesCtrl.getNotes = async (req, res) => {
    try {
        
        const notes = await Note.find();

        res.json(notes)

    } catch (error) {
        console.log(error)
    }
};

// CREATE NOTES
notesCtrl.createNote = async (req, res) => {
    try {
        
        const { title, content, date, author } = req.body

        const newNote = await new Note({ title, content, date, author });

        await newNote.save();

        res.json({ message: 'Note Saved' })

    } catch (error) {
        console.log(error)
    }
};


// UPDATE NOTE
notesCtrl.getNote = async (req, res) => {
    try {
        
        const id = req.params.body;

        const note = await Note.findOne(id);

        res.json(note)
    } catch (error) {
        console.log(error)
    }
}

notesCtrl.updateNote = async (req, res) => {

    try {
        
        const id = req.params.id;

        const { title, content, author } = req.body;

        await Note.findOneAndUpdate(id, { title, content, author });

        res.json({ message: 'Note Update' })

    } catch (error) {
        console.log(error)
    }
}


// DELETE NOTE
notesCtrl.deleteNote = async (req, res) => {

    try {
        
        const id = req.params.id;

        await Note.findOneAndDelete({ _id: id })

        res.json({ message: 'Delete Note' })

    } catch (error) {
        console.log(error)
    }
}


module.exports = notesCtrl;