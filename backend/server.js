const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Middleware to parse data (needed later for login forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Serve static files from the 'frontend' folder
// This allows the HTML files to access CSS/JS in the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// --- ROUTES ---

// Route 1: Landing Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/index.html'));
});

// Route 2: Teacher Login Page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/login.html'));
});

// Route 3: Teacher Dashboard (The Main Hub)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/dashboard.html'));
});

// 3. Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});