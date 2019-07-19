const dbConnection = require("../../config/dbConnection");

module.exports = app => {
  app.get(["/", "/homepage", "/inicio"], (req, res) => {
      res.render("news/home");
  });
}
