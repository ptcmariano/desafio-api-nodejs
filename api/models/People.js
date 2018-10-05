const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/apidesafio', {useNewUrlParser: true});
let model = mongoose.model('People', { name: String });

class People {
    constructor() {
        this.model = model;
        
        const fulano = this.model({ name: 'Zildjian' });
        fulano.save().then(() => console.log('hiho'))
        .catch(() => console.log('err'));
    }

    async getAll() {
        return await this.model.find().exec(function (err, docs) {
            console.log(err,docs);
                return docs;
            });
    }
}

module.exports = People;