var express = require('express');
var router = express.Router();
const Meal = require('../models/Meal');

// Home Page - List all meals
router.get('/', async function(req, res, next) {
  try {
    const meals = await Meal.find().sort({ date: -1 });
    res.render('index', { title: 'FitMeal Planner', meals });
  } catch (err) {
    console.error('❌ Error loading meals:', err);
    res.render('error', { message: 'Error loading meals', error: err });
  }
});

// Show form to add a new meal
router.get('/add', (req, res) => {
  res.render('add', { title: 'Add Meal' });
});

router.post('/add', async (req, res) => {
  try {
    console.log('📦 Form Submitted:', req.body); // <== ADD THIS
    const { name, calories, description } = req.body;
    const newMeal = new Meal({ name, calories, description });
    await newMeal.save();
    res.redirect('/');
  } catch (err) {
    console.error('❌ Failed to save meal:', err);
    res.status(500).send('Error saving meal');
  }
});



module.exports = router;
