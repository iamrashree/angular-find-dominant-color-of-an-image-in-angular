const express = require('express');

const app = new express();

app.use(express.static(__dirname + '/dist'));

// For incorrect route redirect to index.html
app.all('*', (req, res) => {
    res.status(200).send(__dirname + '/dist/index.html');
})

app.listen(process.env.PORT || 8080);