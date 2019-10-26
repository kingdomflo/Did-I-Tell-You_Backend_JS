module.exports = (app, db) => {
  app.get("/user", async (req, res) => {
    let result;
    await db.user.findAll().then(data => {
      console.log(data);
      result = data;
    });
    res.send(result);
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
