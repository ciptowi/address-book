const express = require("express");
const app = express();
const router = require("./src/routers");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}.`);
});

module.exports = app;
