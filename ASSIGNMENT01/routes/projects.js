// routes/projects.js
const express = require('express');
const router = express.Router();

// GET Projects Page
router.get('/projects', (req, res) => {
  const myProjects = [
    {
      title: 'Health Tracker',
      description: 'This website is designed with an intention of having a healthy lifestyle with values like height and weight it calculates the Body Maas Index and gives the result. Along wiht the recommendation like the diet and workout that should be followed by that indivitual',
      url: 'https://github.com/albi-3/healthtracker'
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      url: 'https://github.com/yourusername/project-two'
    }
  ];

  res.render('projects', {
    title: 'Projects',
    pageHeader: 'My Projects',
    projects: myProjects
  });
});

module.exports = router;
