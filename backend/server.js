const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Serve static files from the 'frontend' folder
// We use '../frontend' because server.js is inside the backend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. Define the Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/index.html'));
});

// 3. Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});