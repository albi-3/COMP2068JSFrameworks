// app.js
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

const app = express();

// Set up HBS as view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register partials (for nav and footer)
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Middleware to parse form data (for the contact form)
app.use(express.urlencoded({ extended: true }));

// Serve static files (if you want to add CSS or images later)
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes
app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', projectsRoutes);
app.use('/', contactRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
