require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// To handle form data
app.use(express.urlencoded({extended: true}));

// built-in middleware to read json file into the server json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(500).json('Welcome to feedbag agrihub server');
})

app.use('/access', require('./api/accessApi'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));