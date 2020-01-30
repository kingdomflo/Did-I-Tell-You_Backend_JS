let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request('http://localhost:8100');

let token;

describe('User route', function (done) {

  it(' /login it should GET the token', function (done) {
    baseUrl
      .post('/login').send({ authId: "auth02|aivanidnacs" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('apiToken');
        process.env.TOKEN = res.body.apiToken;
        done();
      });
  });

  it(' /user it should GET all the user', function (done) {
    baseUrl
      .get('/user')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        done();
      });
  });

  it(' /user/:id it should GET all the user', function (done) {
    const id = 1;
    baseUrl
      .get('/user/' + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id').eql(id);
        res.body.should.have.property('name');
        done();
      });
  });
});