// Import modules
const express = require('express');
const cors = require('cors');
const corsOptions = require('./configs/cors-config');
const routes = require('./routes');

const app = express();

// Use CORS middleware
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Welcome to FDPS');
})

app.listen('5000', () => {
    console.log('Listening on port 5000');
})