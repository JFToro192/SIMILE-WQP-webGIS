const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config()

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("../config");

const app = express()


/* Middleware*/
// Parse application json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// CORS
const cors = require("cors");

var corsOptions = {
    origin: `http://localhost:${process.env.PORT}`
  }
// use cors options
app.use(cors(corsOptions))

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () =>{
    mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry,5000)
    });
}

connectWithRetry();

console.log(__dirname);
app.use(express.static(__dirname +'/public/'))

app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));