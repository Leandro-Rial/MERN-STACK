const express = require('express');
const app = express();
const cors = require('cors');

// SETTINGS
app.set('port', process.env.PORT || 3000);


// MIDDELWARE
app.use(cors());
app.use(express.json());

// ROUTERS
app.use('/api/users', require('./routers/users'));
app.use('/api/notes', require('./routers/notes'));


module.exports = app