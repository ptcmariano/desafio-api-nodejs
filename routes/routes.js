let express = require('express');
let router = express.Router();
let middleware = require('./middleware');

router.use('/', (req, res, next) => {
    let Middleware = new middleware(req, res, next);
    next();
});

router.get('/people', (req, res, next) => {
    // todo show
});

module.exports = router;