let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes/routes'));

app.listen(3000);

module.exports = app;