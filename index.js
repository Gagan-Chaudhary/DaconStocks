const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "views"));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
router.get("/article", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/article.html"));
});
router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});
router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/signup.html"));
  //__dirname : It will resolve to your project folder.
});
router.get("/technical", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/technical.html"));
});
router.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/contact.html"));
});
router.get("/videos", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/videos.html"));
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

// Send Mail
// Send Mail
require("dotenv").config();
// const express = require('express');
// const path = require('path');
const sendMail = require("./mail");
const { log } = console;
// const app = express();

const PORT = 8080;

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// email, subject, text
app.post("/email", (req, res) => {
  const { subject, email, text } = req.body;
  log("Data: ", req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      log("ERROR: ", err);
      return res.status(500).json({ message: err.message || "Internal Error" });
    }
    log("Email sent!!!");
    return res.json({ message: "Email sent!!!!!" });
  });
});

// Render home page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// Error page
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "error.html"));
});

// Email sent page
app.get("/email/sent", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "emailMessage.html"));
});

//add the router
app.use("/", router);
app.listen(process.env.PORT || 3000,()=>{
  console.log(`Listening to ther port at ${PORT}`);
});


