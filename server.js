const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listen on port ${port}!!`);
});
