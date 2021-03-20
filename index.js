const config = require("./config/key");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const User = require("./models/user");
//express

//app config
const express = require("express");
const app = express();
const port = 3000;

//mongoose
const mongoose = require("mongoose");
const { response } = require("express");

//db connection
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/user", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

// const { User } = require("./model/user");
// //express
// const express = require("express");
// const app = express();
// const port = 3000;

// //mongoose
// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://admin:mongodbtest@cluster0-shard-00-00.qx7jh.mongodb.net:27017,cluster0-shard-00-01.qx7jh.mongodb.net:27017,cluster0-shard-00-02.qx7jh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qeqbpi-shard-0&authSource=admin&retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("db connected");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/api/users/register", (req, res) => {
//   const user = new User(req.body);
//   user.save(err, (userData) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200);
//   });
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// })
