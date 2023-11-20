const express = require('express');
const app = express();
const dotenv = require("dotenv")
dotenv.config();

app.get('/', (req, res) => {
    res.send("I M BACK") 
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server running on port ${PORT}`))