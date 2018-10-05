let People = require('./models/People');


class PeopleController {
    constructor(entity) {
        this.model = new People();
        this.entity = entity;
    }

    async post(req, res, next) {
        await this.model.post(req.body).then((fetch) => {
            res.send(fetch);
        })
        .catch((err) => { console.log(err); });
    }

    async getAll(req, res, next) {
        await this.model.getAll().then((fetch) => {
            res.send(fetch);
        })
        .catch((err) => { console.log(err); });
    }

    async delete(req, res, next) {
        await this.model.delete(req.body._id).then((fetch) => {
            res.send(fetch);
        })
        .catch((err) => { console.log(err); });
    }
}

module.exports = PeopleController;