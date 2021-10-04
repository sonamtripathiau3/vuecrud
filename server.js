const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const cors = require('cors');
const mongoose = require("mongoose");
const key = require("./config/db");

const app = express();


const router = require('./routes/router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8080", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use('/', router.init());



//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

mongoose.connect(
    key.DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongodb");
    }
  );
  

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is running in ${port}`)
})