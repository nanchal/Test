require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000; // Backend runs on port 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
    user: 'postgres', // Change if needed
    host: 'localhost',
    database: 'valentine_db',
    password: 'postanchal@123', // Replace with your actual password
    port: 5432
});

// Route to Save Messages
app.post('/save-message', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message cannot be empty" });
        }

        await pool.query('INSERT INTO messages (message) VALUES ($1)', [message]);
        res.json({ success: true, message: "Message saved!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
