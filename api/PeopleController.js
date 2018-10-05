let People = require('./models/People');


class PeopleController {
    constructor(entity) {
        this.model = new People();
        this.entity = entity;
    }

    post(req, res, next) {
        console.log(this.model);
        return res.send('response');
    }

    async getAll(req, res, next) {
        await res.send(await this.model.getAll());
    }
}

module.exports = PeopleController;