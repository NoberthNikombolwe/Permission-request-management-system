const express = require('express');
const router = express.Router();
const connection = require('./db');

// Create a new course
router.post('/courses', (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO courses (name) VALUES (?)';
  connection.query(query, [name], (err, results) => {
    if (err) throw err;
    // res.json({ courseId: results.insertId, message: 'Course created successfully' });
    res.redirect('/courses/');
  });
});

router.get('/addcourses', (req, res) => {
    res.render('courseForm');
  });

// Handle the creation of a new course
router.post('/courses', (req, res) => {
  const { name } = req.body;

  const insertQuery = 'INSERT INTO courses (name) VALUES (?, ?)';
  connection.query(insertQuery, [name], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating the course' });
    }
    res.redirect('/courses');
  });
});

// Render all courses
router.get('/courses', (req, res) => {
  const query = 'SELECT * FROM courses';
  connection.query(query, (error, courses) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching courses' });
    }
    res.render('courses', { title: 'All Courses', courses });
  });
});

// Render the form to edit a course
router.get('/courses/:courseId/edit', (req, res) => {
  const courseId = req.params.courseId;
  const query = 'SELECT * FROM courses WHERE id = ?';
  connection.query(query, [courseId], (error, course) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching the course' });
    }
    if (course.length > 0) {
      res.render('editCourseForm', { title: 'Edit Course', course: course[0] });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
});

// Handle the update of a course
router.post('/courses/:courseId/edit', (req, res) => {
  const courseId = req.params.courseId;
  const { name } = req.body;

  const updateQuery = 'UPDATE courses SET name = ? = ? WHERE id = ?';
  connection.query(updateQuery, [name, courseId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating the course' });
    }
    res.redirect('/courses');
  });
});

// Handle the deletion of a course
router.post('/courses/:courseId/delete', (req, res) => {
  const courseId = req.params.courseId;
  const deleteQuery = 'DELETE FROM courses WHERE id = ?';
  connection.query(deleteQuery, [courseId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting the course' });
    }
    res.redirect('/courses');
  });
});

module.exports = router;


