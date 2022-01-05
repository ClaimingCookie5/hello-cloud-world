const express = require('express');
const path = require('path');
const app = express();
var pic = 'static/catpicture.png';
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'catpicture.png'))
}); 

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})