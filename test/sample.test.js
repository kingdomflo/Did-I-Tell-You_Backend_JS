let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request('http://localhost:8100');

//Our parent block
describe('Sample', () => {
  before((done) => {
    done();
  });

  describe('/GET /', () => {
    it('it should GET the hello comrade', (done) => {
      baseUrl
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.hello.should.equal('comrade');
          done();
        });
    });
    it('it should GET the ping', (done) => {
      baseUrl
        .get('/ping')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

});