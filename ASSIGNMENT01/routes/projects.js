// routes/projects.js
const express = require('express');
const router = express.Router();

// GET Projects Page
router.get('/', (req, res) => {  
  const myProjects = [
    {
      title: 'Health Tracker',
      description: 'This website is designed with an intention of having a healthy lifestyle. Using height and weight values, it calculates the Body Mass Index (BMI) and provides recommendations such as diet and workouts tailored for the individual.',
      url: 'https://github.com/albi-3/healthtracker'
    }
  ];  

  res.render('projects', {
    title: 'Projects',
    pageHeader: 'My Projects',
    projects: myProjects
  });
});

module.exports = router;
