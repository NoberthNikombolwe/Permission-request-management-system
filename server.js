const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const path = require("path");
const coursesRoutes = require('./coursesController');
const modullesRoutes = require('./modullesController');
const studentsRoutes = require('./studentsController');

const app = express();
const port = 3030;

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Set static folder for CSS and other public assets
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware to parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prms_db_dit',
});

db.connect();

app.use('/api', coursesRoutes);
app.use('/api', modullesRoutes);
app.use('/api', studentsRoutes);


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'prms_db_dit',
  resave: true,
  saveUninitialized: true,
}));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

app.get("/", (req, res) => {
    res.render("login", { title: "Login Now PRMS" });
  });

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get("/reg", (req, res) => {
    res.render("register", { title: "Dashboard" });
  });
app.get('/login', (req, res) => {
    res.render('login');
});


// Route to handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists in the database
    const selectUserQuery = 'SELECT * FROM students WHERE email = ?';
    db.query(selectUserQuery, [email], (err, users) => {
      if (err) throw err;
  
      if (users.length === 0) {
        // User not found, handle accordingly (e.g., show an error message)
        res.status(401).send('Invalid email or password.');
      } else {
        const user = users[0];
  
        // Compare plain text password
        if (password === user.password) {
          // Passwords match, user is authenticated
          req.session.user = user; // Store user information in the session
          res.redirect('/dashboard'); // Redirect to the dashboard or another authenticated page
        } else {
          // Passwords do not match, handle accordingly (e.g., show an error message)
          res.status(401).send('Invalid email or password.');
        }
      }
    });
  });
  
