const notesCtrl = {};

// ALL NOTES
notesCtrl.getNotes = (req, res) => {
    res.json({ message: [] })
};

// CREATE NOTES
notesCtrl.createNote = (req, res) => {
    res.json({ message: 'Note Saved' })
};


// UPDATE NOTE
notesCtrl.getNote = (req, res) => {
    res.json({ Title: 'Helouda' })
}

notesCtrl.updateNote = (req, res) => {
    res.json({ message: 'Note Update' })
}


// DELETE NOTE
notesCtrl.deleteNote = (req, res) => {
    res.json({ message: 'Delete Note' })
}


module.exports = notesCtrl;