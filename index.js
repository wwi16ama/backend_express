const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let obj = { key: "value"}
    res.send(obj)
});

app.listen(3000);