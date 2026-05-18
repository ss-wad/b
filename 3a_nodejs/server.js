const express = require('express');
const app = express();
const path = require('path');

// Serve files from a folder named "public"
app.use(express.static('public'));

// Fallback to send index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});