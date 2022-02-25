const path = require('path');
const express = require('express');

path.join(__dirname, '..', 'public');


const app  = express();
const port = process.env.PORT ?? 3000;

const publicDirectoryPath = path.join(__dirname, '..', 'public');

app.use('/public', express.static(publicDirectoryPath));
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.listen(port, () => {
    console.log('server is up on port ' + port);
});