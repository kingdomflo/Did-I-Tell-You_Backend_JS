let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request('http://localhost:8100');

describe('Sample route', function (done) {

  // A very long environment setup.
  // TODO when we are going to try to run the server and directly run the test
  // before(function (done) {
  //   this.timeout(10000); 
  //   setTimeout(done, 9000);
  // });

  it(' / it should GET the hello comrade', function (done) {
    baseUrl
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.hello.should.equal('comrade');
        done();
      });
  });

  it(' /ping it should GET the ping', function (done) {
    baseUrl
      .get('/ping')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('User test', function () {
  require('./user.test');
});