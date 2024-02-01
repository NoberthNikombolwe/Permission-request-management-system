const express = require('express');
const router = express.Router();
const connection = require('./db');

// Create a new lecture
router.post('/lectures', (req, res) => {
  const { firstname, lastname, email, phone, password, modulle_id } = req.body;
  const query = 'INSERT INTO lectures ( firstname, lastname, email, phone, password, modulle_id ) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [ firstname, lastname, email, phone, password, modulle_id ], (err, results) => {
    if (err) throw err;
    // res.json({ lectureId: results.insertId, message: 'lecture created successfully' });
    res.redirect('/dashboard');
  });
});

router.get('/addlectures', (req, res) => {
    res.render('lectureForm');
  });


router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

// Handle the creation of a new lecture
router.post('/lectures', (req, res) => {
  const {  firstname, lastname, email, phone, password, modulle_id  } = req.body;

  const insertQuery = 'INSERT INTO lectures ( firstname, lastname, email, phone, password, modulle_id ) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(insertQuery, [ firstname, lastname, email, phone, password, modulle_id ], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating the lecture' });
    }
    res.redirect('/lectures');
  });
});

// Render all lectures
router.get('/lectures', (req, res) => {
  const query = 'SELECT * FROM lectures';
  connection.query(query, (error, lectures) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching lectures' });
    }
    res.render('lectures', { title: 'All lectures', lectures });
  });
});

// Render the form to edit a lecture
router.get('/lectures/:lectureId/edit', (req, res) => {
  const lectureId = req.params.lectureId;
  const query = 'SELECT * FROM lectures WHERE id = ?';
  connection.query(query, [lectureId], (error, lecture) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching the lecture' });
    }
    if (lecture.length > 0) {
      res.render('editlectureForm', { title: 'Edit lecture', lecture: lecture[0] });
    } else {
      res.status(404).json({ message: 'lecture not found' });
    }
  });
});

// Handle the update of a lecture
router.post('/lectures/:lectureId/edit', (req, res) => {
  const lectureId = req.params.lectureId;
  const {  firstname, lastname, email, phone, password, modulle_id  } = req.body;

  const updateQuery = 'UPDATE lectures SET firstname = ?, lastname= ?, email= ?, phone= ?, password= ?, modulle_id= ?  WHERE id = ?';
  connection.query(updateQuery, [ firstname, lastname, email, phone, password, modulle_id , lectureId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating the lecture' });
    }
    res.redirect('/lectures');
  });
});

// Handle the deletion of a lecture
router.post('/lectures/:lectureId/delete', (req, res) => {
  const lectureId = req.params.lectureId;
  const deleteQuery = 'DELETE FROM lectures WHERE id = ?';
  connection.query(deleteQuery, [lectureId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting the lecture' });
    }
    res.redirect('/lectures');
  });
});

module.exports = router;


