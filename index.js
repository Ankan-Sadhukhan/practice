const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hi there! Ujala");
});

const server = () => {
  app.listen(port, () => {
    console.log("server is up", port);
  });
};

server();
