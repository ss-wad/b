require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Use the key from the .env file
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Connection Error:", err));

const User = mongoose.model('User', { name: String, email: String });

// CRUD Routes
app.post('/api/users', async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.put('/api/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
});

app.delete('/api/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted" });
});

app.listen(3000, () => console.log('🚀 Server: http://localhost:3000'));