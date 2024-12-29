const mysql = require('mysql2')
require('dotenv').config()

// Create a connection to database
const connection = mysql.createConnection({
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME
});

// Pass any errors if occurred during createConnection()
connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database:", err);
    } else {
        console.log("Successfully connected to database")
    }
});

module.exports = connection;