const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  
});

// GET Route for a specific note
notes.get('/:note_id', (req, res) => {

});

// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {

});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {

});

module.exports = notes;