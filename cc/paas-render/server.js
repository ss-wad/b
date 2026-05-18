const express = require('express');

const app = express();

const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" }
];

app.use(express.static(__dirname));


app.get('/students', (req, res) => {
    res.json(students);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});