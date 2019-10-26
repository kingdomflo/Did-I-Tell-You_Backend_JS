module.exports = (app, db) => {
  const userService = require("../services/user-service");

  app.get("/user", async (req, res) => {
    res.send(await userService.findAll(db));
  });

  app.get("/testAddUser", async (req, res) => {
    let result;
    let query = req.query;
    let name = query.name;

    await db.user.create({ name: name }).then(data => {
      result = data;
    });

    res.send(result);
  });
};
