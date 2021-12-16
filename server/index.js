const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config()

const { 
    MONGO_USER, 
    MONGO_PASSWORD, 
    MONGO_IP, 
    MONGO_PORT, 
    SESSION_SECRET,
    REDIS_URL,
    REDIS_PORT
} = require("../config");

const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

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
        // No longer required mongo 6.0
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry,5000)
    });
}

connectWithRetry();

app.use(express.json());

app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
    //   TODO: No cookies on response
      cookie: { 
          secure: false,
          resave: false,
          httpOnly: true,
          maxAge: 30 * 1000,
          saveUninitialized: false, 
        },
    })
  )

console.log(__dirname);
app.use(express.static(__dirname +'/public/'))
app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",userRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));