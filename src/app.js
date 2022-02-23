const path = require('path');
const express = require('express');

path.join(__dirname, '..', 'public');


const app = express();
const publicDirectoryPath = path.join(__dirname, '..', 'public');

app.use('/public', express.static(publicDirectoryPath));
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.listen(3006, () => {
    console.log('server is up on port 3006.');
});