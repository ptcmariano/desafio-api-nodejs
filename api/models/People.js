const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/apidesafio', {useNewUrlParser: true});
let model = mongoose.model('People', {
    name: String,
    email: String,
    password: String,
    cpf: String,
    phone: String,
    address: String
});

class People {
    constructor() {
        this.model = model;
    }

    async getAll() {
        return await this.model.find().exec();
    }

    async post(data) {
        return await this.model(data).save();
    }

    async delete(id) {
        return await this.model.deleteOne({"_id":id});
    }
}

module.exports = People;