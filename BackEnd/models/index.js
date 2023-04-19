"use strict";

const mongoose = require("mongoose");

// Connection URL
const url = "mongodb://127.0.0.1:27017/solo_project";

async function setUp() {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(url);
    console.log("Connected successfully to mongoose server!!");
  } catch (e) {
    console.error(e);
  }
}

setUp();

module.exports = mongoose;
