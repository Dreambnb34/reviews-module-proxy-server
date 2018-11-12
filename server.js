const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/rooms/*", express.static(path.join(__dirname, "public")));

module.exports = app;
