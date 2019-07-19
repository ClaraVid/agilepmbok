const app = require("./config/server");

require("./app/routes/home")(app);
require("./app/routes/news")(app);
require("./app/routes/practices")(app);
require("./app/routes/about")(app);

// starting the server
app.listen(app.get("port"));
