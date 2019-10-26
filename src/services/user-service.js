module.exports = {

  findAll: async function (db) {
    let result;
    await db.user.findAll().then(data => {
      console.log(data);
      result = data;
    });
    return result;
  }

  
};