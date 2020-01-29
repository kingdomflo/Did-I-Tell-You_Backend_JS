let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request('http://localhost:8100');

describe('Relationship route', function (done) {

    it(' /relationship it should have an error because we are not authenticated', function (done) {
        baseUrl
            .get('/relationship')
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });

    // TODO not hardcoded the token but go with login
    it(' /relationship it should GET all the relationship from a user', function (done) {
        baseUrl
            .get('/relationship').set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

});