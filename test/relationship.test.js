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

    it(' /relationship it should GET all the relationship from a user, 2', function (done) {
        baseUrl
            .get('/relationship')
            .set('Authorization', process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
    });

    it(' /relationship it should not POST a new relationship', function (done) {
        baseUrl
            .post('/relationship')
            .set('Authorization', process.env.TOKEN)
            .send({ name: "", userId: 2 })
            .end((err, res) => {
                res.should.have.status(422);
                res.body.should.have.property('messages');
                done();
            });
    });

    it(' /relationship it should not POST a new relationship', function (done) {
        baseUrl
            .post('/relationship')
            .set('Authorization', process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(422);
                res.body.should.have.property('messages');
                done();
            });
    });

    it(' /relationship it should POST a new relationship', function (done) {
        baseUrl
            .post('/relationship')
            .set('Authorization', process.env.TOKEN)
            .send({ name: "John Doe" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                done();
            });
    });

    it(' /relationship it should GET all the relationship from a user, now 3', function (done) {
        baseUrl
            .get('/relationship')
            .set('Authorization', process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                done();
            });
    });

    it(' /relationship it should GET all the 3th relationship, John Doe', function (done) {
        baseUrl
            .get('/relationship/3')
            .set('Authorization', process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('id').eql(3);
                res.body.should.have.property('name').eql('John Doe');;
                done();
            });
    });

});