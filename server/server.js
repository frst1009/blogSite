const express = require("express");
require('dotenv').config();
const { db } = require("./db");
const { createServer } = require("http");
const app = express();
const cors = require("cors");

const port = 3000;

app.use(express.json());
app.use(cors());
db.connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});