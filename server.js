const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = 3000;

// Initialize Express
const app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
require("dotenv").config();
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYT-Scrape";
// DB connection
require('dotenv').config()
var db = require("./models");
var MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI),
.then(()=>console.log("DB connected"))`

mongoose.connect(MONGODB_URI);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// routes
require("./routes/htmlRoutes.js")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
