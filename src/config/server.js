const express = require("express");
const path = require("path");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "../app/views"));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "img")));

module.exports = app;
