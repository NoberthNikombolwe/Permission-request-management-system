const express = require('express');
const router = express.Router();
const connection = require('./db');

// Create a new student
router.post('/students', (req, res) => {
  const { firstname, lastname, email, phone, password, course_id } = req.body;
  const query = 'INSERT INTO students ( firstname, lastname, email, phone, password, course_id ) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [ firstname, lastname, email, phone, password, course_id ], (err, results) => {
    if (err) throw err;
    // res.json({ studentId: results.insertId, message: 'student created successfully' });
    res.redirect('/dashboard');
  });
});

router.get('/addstudents', (req, res) => {
    res.render('studentForm');
  });

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

// Handle the creation of a new student
router.post('/students', (req, res) => {
  const {  firstname, lastname, email, phone, password, course_id  } = req.body;

  const insertQuery = 'INSERT INTO students ( firstname, lastname, email, phone, password, course_id ) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(insertQuery, [ firstname, lastname, email, phone, password, course_id ], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating the student' });
    }
    res.redirect('/students');
  });
});

// Render all students
router.get('/students', (req, res) => {
  const query = 'SELECT * FROM students';
  connection.query(query, (error, students) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching students' });
    }
    res.render('students', { title: 'All students', students });
  });
});

// Render the form to edit a student
router.get('/students/:studentId/edit', (req, res) => {
  const studentId = req.params.studentId;
  const query = 'SELECT * FROM students WHERE id = ?';
  connection.query(query, [studentId], (error, student) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching the student' });
    }
    if (student.length > 0) {
      res.render('editstudentForm', { title: 'Edit student', student: student[0] });
    } else {
      res.status(404).json({ message: 'student not found' });
    }
  });
});

// Handle the update of a student
router.post('/students/:studentId/edit', (req, res) => {
  const studentId = req.params.studentId;
  const {  firstname, lastname, email, phone, password, course_id  } = req.body;

  const updateQuery = 'UPDATE students SET firstname = ?, lastname= ?, email= ?, phone= ?, password= ?, course_id= ?  WHERE id = ?';
  connection.query(updateQuery, [ firstname, lastname, email, phone, password, course_id , studentId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating the student' });
    }
    res.redirect('/students');
  });
});

// Handle the deletion of a student
router.post('/students/:studentId/delete', (req, res) => {
  const studentId = req.params.studentId;
  const deleteQuery = 'DELETE FROM students WHERE id = ?';
  connection.query(deleteQuery, [studentId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting the student' });
    }
    res.redirect('/students');
  });
});

module.exports = router;


