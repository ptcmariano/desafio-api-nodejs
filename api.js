let express = require('express');
let app = express();

app.disable('x-powered-by');

app.use('/api/v1', require('./routes/routes'));

app.listen(3000);

module.exports = app;