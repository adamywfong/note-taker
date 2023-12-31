const express = require('express');
const path = require('path');

const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to homepage
app.get('*', (req,res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);