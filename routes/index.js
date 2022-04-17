var express = require("express");
var router = express.Router();

const messages = {
  messages: [

  ],
};

router.get("/", function (req, res, next) {
  res.render("index", messages);
});

module.exports = router;

router.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", (req, res) => {

  const { user, text } = req.body;
  messages.messages.push({ user: user, text: text, added: new Date() });

  res.redirect("/");
});

module.exports = router;

/* GET home page. */
