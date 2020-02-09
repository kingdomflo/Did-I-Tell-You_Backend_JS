let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request("http://localhost:8100");

let relationshipId;

describe("Relationship route", function (done) {
    it(" /relationship it should have an error because we are not authenticated", function (done) {
        baseUrl.get("/relationship").end((err, res) => {
            res.should.have.status(401);
            done();
        });
    });

    it(" /relationship it should GET all the relationship from a user, 3", function (done) {
        baseUrl
            .get("/relationship")
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.be.eql(3);
                done();
            });
    });

    it(" /relationship it should not POST a new relationship", function (done) {
        baseUrl
            .post("/relationship")
            .set("Authorization", process.env.TOKEN)
            .send({ name: "", userId: 2 })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("messages");
                done();
            });
    });

    it(" /relationship it should not POST a new relationship", function (done) {
        baseUrl
            .post("/relationship")
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("messages");
                done();
            });
    });

    it(" /relationship it should POST a new relationship", function (done) {
        baseUrl
            .post("/relationship")
            .set("Authorization", process.env.TOKEN)
            .send({ name: "John Doe" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("id");
                res.body.should.have.property("name");
                relationshipId = res.body.id;
                done();
            });
    });

    it(" /relationship it should GET all the relationship from a user, now 4", function (done) {
        baseUrl
            .get("/relationship")
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.be.eql(4);
                done();
            });
    });

    it(" /relationship it should GET the relationship John Doe", function (done) {
        baseUrl
            .get("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("id").eql(relationshipId);
                res.body.should.have.property("name").eql("John Doe");
                done();
            });
    });

    it(" /relationship it should PUT John Doe to Pieter Doe", function (done) {
        baseUrl
            .put("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .send({ name: "Pieter Doe" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("id").eql(relationshipId);
                res.body.should.have.property("name").eql("Pieter Doe");
                done();
            });
    });

    it(" /relationship it should GET the relationship Pieter Doe, old John Doe", function (done) {
        baseUrl
            .get("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("id").eql(relationshipId);
                res.body.should.have.property("name").eql("Pieter Doe");
                done();
            });
    });

    it(" /relationship it should not PUT the relationship because name is empty", function (done) {
        baseUrl
            .put("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .send({ name: "" })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it(" /relationship it should not PUT the relationship because is name and the nom", function (done) {
        baseUrl
            .put("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .send({ nom: "" })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it(" /relationship it should not PUT the relationship wich is not belong to the current user", function (done) {
        baseUrl
            .put("/relationship/" + 1)
            .set("Authorization", process.env.TOKEN)
            .send({ name: "Pieter Doe" })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it(" /relationship it should not DELETE the relationship id one wich is not belong to the current user", function (done) {
        baseUrl
            .delete("/relationship/1")
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it(" /relationship it should DELETE the relationship John Doe", function (done) {
        baseUrl
            .delete("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it(" /relationship it should GET all the relationship from a user, now 3", function (done) {
        baseUrl
            .get("/relationship")
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.be.eql(3);
                done();
            });
    });

    it(" /relationship it should not DELETE the relationship wich is not present anymore", function (done) {
        baseUrl
            .delete("/relationship/" + relationshipId)
            .set("Authorization", process.env.TOKEN)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
