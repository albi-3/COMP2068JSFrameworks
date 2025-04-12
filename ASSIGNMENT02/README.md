# 🍽️ FitMeal Planner

FitMeal Planner is a full-stack Node.js application that allows users to create, view, edit, and delete personalized meal entries — with authentication and GitHub login support.

---

## ✅ Features

- 🔐 User registration and login (using `passport-local`)
- 🐙 GitHub OAuth login (`passport-github2`)
- 📝 Add, edit, delete meals
- 📋 View all meals (in a secure dashboard)
- 🔒 Route protection — only authenticated users can manage meals
- 📦 MongoDB (hosted via MongoDB Atlas)
- 🎨 Handlebars templating + Bootstrap styling

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express
- **Auth**: Passport.js, Passport-GitHub2
- **Database**: MongoDB + Mongoose
- **Frontend**: HBS (Handlebars) + Bootstrap
- **Session**: express-session + connect-flash

---

## 📂 Project Structure

ASSIGNMENT02/ 
├── models/ 
│ └── Meal.js 
│ └── User.js 
├── routes/ 
│ └── index.js 
│ └── auth.js 
├── views/ 
│ └── index.hbs 
│ └── add.hbs 
│ └── edit.hbs 
│ └── login.hbs 
│ └── register.hbs 
├── config/ 
│ └── passport.js 
├── public/ 
│ └── stylesheets/ 
│ └── style.css 
├── app.js 
└── package.json

📚 License
This project is for academic purposes — built as part of the COMP2068 Assignment 2B (Georgian College).