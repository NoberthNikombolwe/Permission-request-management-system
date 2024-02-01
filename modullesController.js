const express = require('express');
const router = express.Router();
const connection = require('./db');

// Create a new modulle
router.post('/modulles', (req, res) => {
  const { coden, name } = req.body;
  const query = 'INSERT INTO modulles (coden, name) VALUES (?, ?)';
  connection.query(query, [coden, name], (err, results) => {
    if (err) throw err;
    res.json({ modulleId: results.insertId, message: 'modulle created successfully' });
  });
});

router.get('/addmodulles', (req, res) => {
    res.render('modulleForm');
  });

// Handle the creation of a new modulle
router.post('/modulles', (req, res) => {
  const { coden, name } = req.body;

  const insertQuery = 'INSERT INTO modulles (coden, name) VALUES (?, ?)';
  connection.query(insertQuery, [coden, name], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating the modulle' });
    }
    res.redirect('/modulles');
  });
});

// Render all modulles
router.get('/modulles', (req, res) => {
  const query = 'SELECT * FROM modulles';
  connection.query(query, (error, modulles) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching modulles' });
    }
    res.render('modulles', { title: 'All modulles', modulles });
  });
});

// Render the form to edit a modulle
router.get('/modulles/:modulleId/edit', (req, res) => {
  const modulleId = req.params.modulleId;
  const query = 'SELECT * FROM modulles WHERE id = ?';
  connection.query(query, [modulleId], (error, modulle) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching the modulle' });
    }
    if (modulle.length > 0) {
      res.render('editmodulleForm', { title: 'Edit modulle', modulle: modulle[0] });
    } else {
      res.status(404).json({ message: 'modulle not found' });
    }
  });
});

// Handle the update of a modulle
router.post('/modulles/:modulleId/edit', (req, res) => {
  const modulleId = req.params.modulleId;
  const { coden, name } = req.body;

  const updateQuery = 'UPDATE modulles SET coden = ? , name = ? WHERE id = ?';
  connection.query(updateQuery, [coden, name, modulleId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating the modulle' });
    }
    res.redirect('/modulles');
  });
});

// Handle the deletion of a modulle
router.post('/modulles/:modulleId/delete', (req, res) => {
  const modulleId = req.params.modulleId;
  const deleteQuery = 'DELETE FROM modulles WHERE id = ?';
  connection.query(deleteQuery, [modulleId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting the modulle' });
    }
    res.redirect('/modulles');
  });
});

module.exports = router;


