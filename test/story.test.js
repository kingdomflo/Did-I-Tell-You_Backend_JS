let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

// TODO do it with a direct require server and not hardcoded URL
// let server = require('../');
let baseUrl = chai.request("http://localhost:8100");

describe("Story route", function (done) {
  it(" /story it should have an error because we are not authenticated", function (done) {
    baseUrl.get("/story").end((err, res) => {
      res.should.have.status(401);
      done();
    });
  });

  it(" /story it should GET all the story from a user, 1", function (done) {
    baseUrl
      .get("/story")
      .set("Authorization", process.env.TOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        done();
      });
  });

  it(" /story it should GET the story YT Joke with two relationship", function (done) {
    baseUrl
      .get("/story/1")
      .set("Authorization", process.env.TOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("id").eql(1);
        res.body.should.have.property("text").eql("YT Joke");
        res.body.should.have.property("relationships").a("array");
        res.body.relationships.length.should.be.eql(2);
        done();
      });
  });

  it(" /relationship it should POST a new story with one relationship", function (done) {
    baseUrl
      .post("/story")
      .set("Authorization", process.env.TOKEN)
      .send({
        text: "War story",
        relationships: [
          { id: 3 }
        ]
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("id");
        res.body.should.have.property("text");
        res.body.should.have.property("relationships").a("array");
        res.body.relationships.length.should.be.eql(1);
        done();
      });
  });

  it(" /story it should GET all the story from a user, 2", function (done) {
    baseUrl
      .get("/story")
      .set("Authorization", process.env.TOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        done();
      });
  });

  it(" /relationship it should not POST a new story because relatiobship don't exist", function (done) {
    baseUrl
      .post("/story")
      .set("Authorization", process.env.TOKEN)
      .send({
        text: "War story",
        relationships: [
          { id: 8 }
        ]
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("messages");
        done();
      });
  });

  it(" /relationship it should not POST a new story because there is no text", function (done) {
    baseUrl
      .post("/story")
      .set("Authorization", process.env.TOKEN)
      .send({
        text: "",
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("messages");
        done();
      });
  });

  it(" /story it should GET all the story from a user, 2", function (done) {
    baseUrl
      .get("/story")
      .set("Authorization", process.env.TOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        done();
      });
  });
});
