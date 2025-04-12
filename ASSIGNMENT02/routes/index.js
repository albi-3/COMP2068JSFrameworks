const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// ✅ Auth middleware to protect private routes
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
}

// Home Page - List all meals
router.get('/', ensureAuthenticated, async function (req, res, next) {
  try {
    const meals = await Meal.find().sort({ date: -1 });
    res.render('index', { title: 'FitMeal Planner', meals });
  } catch (err) {
    console.error('❌ Error loading meals:', err);
    res.render('error', { message: 'Error loading meals', error: err });
  }
});

// Show form to add a new meal
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('add', { title: 'Add Meal' });
});

// Handle form POST to add a new meal
router.post('/add', ensureAuthenticated, async (req, res) => {
  try {
    const { name, calories, description } = req.body;
    const newMeal = new Meal({ name, calories, description });
    await newMeal.save();
    res.redirect('/');
  } catch (err) {
    console.error('❌ Failed to save meal:', err);
    res.status(500).send('Error saving meal');
  }
});

// Show edit form for a meal
router.get('/edit/:id', ensureAuthenticated, async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    res.render('edit', { title: 'Edit Meal', meal });
  } catch (err) {
    console.error('❌ Failed to load meal for editing:', err);
    res.status(500).send('Meal not found');
  }
});

// Handle form POST to update a meal
router.post('/edit/:id', ensureAuthenticated, async (req, res) => {
  try {
    const { name, calories, description } = req.body;
    await Meal.findByIdAndUpdate(req.params.id, { name, calories, description });
    res.redirect('/');
  } catch (err) {
    console.error('❌ Failed to update meal:', err);
    res.status(500).send('Error updating meal');
  }
});

// Handle POST to delete a meal
router.post('/delete/:id', ensureAuthenticated, async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error('❌ Failed to delete meal:', err);
    res.status(500).send('Error deleting meal');
  }
});

module.exports = router;
