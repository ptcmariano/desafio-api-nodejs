let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../api');

chai.should();
chai.use(chaiHttp);

describe('routes /api/v1/people', () => {
    after((done) => {
        done();
        //process.exit(0);
    });

    it('it should POST one people', (done) => {
      chai.request(server)
          .post('/api/v1/people')
          .send({name:'chai test'})
          .end((err, res) => {
            if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.name.should.be.eql('chai test');
            done();
          });
    }),

    it('it should GET all the people', (done) => {
        chai.request(server)
            .get('/api/v1/people')
            .end((err, res) => {
                if (err) return done(err);
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.above(1);
              done();
            });
      });
});