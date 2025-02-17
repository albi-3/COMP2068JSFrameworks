// routes/contact.js
const express = require('express');
const router = express.Router();

// GET Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me',
    pageHeader: 'Get in Touch'
  });
});

// POST Contact form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });

  res.render('contact', {
    title: 'Contact Me',
    pageHeader: 'Get in Touch',
    successMessage: 'Thank you for contacting me! I will get back to you soon.'
  });
});

module.exports = router;
