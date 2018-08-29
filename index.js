const express = require('express')
const app = express()

app.get('/greeting', (req, res) => {
    let obj = { 
        id: 1,
        content: "was"
    }
    res.send(obj)
});

app.listen(3000);