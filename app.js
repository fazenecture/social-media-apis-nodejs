const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://new-user-01:Jaimatadi@cluster0.3optd.mongodb.net/messages?retryWrites=true&w=majority"
  )
  .then((result) => {
      console.log("Connected");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
