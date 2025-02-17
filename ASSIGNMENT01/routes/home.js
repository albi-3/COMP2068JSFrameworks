// routes/home.js
const express = require('express');
const router = express.Router();

// GET Home Page
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    pageHeader: 'Welcome to My Portfolio',
    message: 'This is a portfolio that i am doing as a part of the assignment of Javascript framework.'
  });
});

module.exports = router;
