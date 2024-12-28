// CORS options to allow requests from frontend (5173) running on backend (5000)
const corsOptions = {
    origin: 'http://localhost:5173', // Only allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Only allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Only allow these headers
}

module.exports = corsOptions;