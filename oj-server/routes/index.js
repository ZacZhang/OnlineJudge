const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res) {
  // when visit root directory, send index.html to start client side
  res.sendFile("index.html", {root: path.join(__dirname, '../../public/')});
});

module.exports = router;
