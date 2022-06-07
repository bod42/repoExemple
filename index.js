const express = require('express');
var bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));