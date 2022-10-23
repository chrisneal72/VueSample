require("dotenv").config();
const express = require("express");
const app = express();
const serveStatic = require('serve-static');
const path = require("path");
const PORT = process.env.PORT || 3001;
const connectToDatabase = require("./config/db");
const sample = require("./config/routes/sample");
const cors = require("cors");

// const users = require("./routes/users");
// const protected = require("./routes/protected");

// Middleware
app.use(express.json());

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

// Router
app.use("/api/sample", sample);
// app.use("/api/users", users);
// app.use("/", protected);

// Static directory to be served
app.use(express.static("client/build"));
//app.use(express.static("client/public"));

// This will eventually be the React entrance route
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   res.sendFile(path.resolve(__dirname, "client/build/index.html"));
// });

connectToDatabase();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);