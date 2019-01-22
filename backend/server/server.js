const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();
const root = './routes'

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', api);
app.use(express.static(root));


app.listen(3000, function() {
  console.log('Server running on localhost: 3000');
});
