const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: '3.109.213.195', // Replace with the MySQL server IP
    user: 'appuser', // Replace with the MySQL username
    password: 'password', // Replace with the MySQL password
    database: 'employee_management' // Replace with your database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to the MySQL database');
});

// API routes
app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

app.post('/api/employees', (req, res) => {
    const { name, position, salary } = req.body;
    const sql = 'INSERT INTO employees (name, position, salary) VALUES (?, ?, ?)';
    db.query(sql, [name, position, salary], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json({ message: 'Employee added successfully', id: result.insertId });
    });
});

app.delete('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM employees WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json({ message: 'Employee deleted successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});

