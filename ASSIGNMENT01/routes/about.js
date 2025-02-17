// routes/about.js
const express = require('express');
const router = express.Router();

// GET About Me Page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    pageHeader: 'About Me',
    bio: 'Hello! My name is Albin Sathish, and I am a web developer.'
  });
});

module.exports = router;
