let express = require('express');
let router = express.Router();
var expressModifyResponse = require('express-modify-response');
let PeopleController = require('../api/PeopleController');

// middleware to clear password on response
router.use(expressModifyResponse(
    (req, res) => {
        if (res.getHeader('Content-Type').startsWith('application/json')) return true;
        return false;
    },
    (req, res, body) => {
        let json = JSON.parse(body.toString());
        if (!!json.password) {
            json.password = "*****";
        } else if (typeof json.forEach == 'function') {
            json.forEach(element => {
                element.password = "*****";
            });
        }
        return JSON.stringify(json);
    }
));

router.get('/people', (req, res, next) => {
    return new PeopleController({}).getAll(req, res, next);
});

router.post('/people', (req, res, next) => {
    return new PeopleController(req.body).post(req, res, next);
});

router.delete('/people', (req, res, next) => {
    return new PeopleController(req.body).delete(req, res, next);
});

module.exports = router;