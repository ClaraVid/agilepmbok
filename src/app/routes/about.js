const dbConnection = require("../../config/dbConnection");

module.exports = app => {
  app.get(["/", "/about", "/about"], (req, res) => {
      res.render("news/about");
  });
}
