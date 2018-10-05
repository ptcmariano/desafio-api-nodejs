let express = require('express');
let router = express.Router();
let middleware = require('./middleware');
let PeopleController = require('../api/PeopleController');

router.use('/', (req, res, next) => {
    let Middleware = new middleware(req, res, next);
    next();
});

router.get('/people', (req, res, next) => {
    return new PeopleController({}).getAll(req, res, next)
});

router.post('/people', (req, res, next) => {
    return new PeopleController(req.body).post(req, res, next)
});

module.exports = router;