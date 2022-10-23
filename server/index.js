require("dotenv").config();
const express = require("express");
const app = express();
const serveStatic = require("serve-static");
const path = require("path");
const PORT = process.env.PORT || 5000;
const connectToDatabase = require("./config/db");
const sample = require("./config/routes/sample");
const cors = require("cors");

// Middleware
app.use(express.json());

//here we are configuring dist to serve app files
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// var corsOptions = {
//   origin: "http://localhost:8080",
// };
// app.use(cors(corsOptions));
app.use(cors());

// Router
app.use("/api/sample", sample);
// app.use("/api/users", users);

connectToDatabase();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);
