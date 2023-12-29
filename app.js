const express = require('express');
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const tutorRouter = require("./api/routes/tutor");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(tutorRouter);

app.listen(PORT, () => {
  console.log('App works!!!')
})