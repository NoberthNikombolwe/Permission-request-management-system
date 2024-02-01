const express = require('express');
const router = express.Router();
const connection = require('./db');

// Create a new permission
router.post('/permissions', (req, res) => {
  const { title, body, modulle_id, student_id } = req.body;
  const query = 'INSERT INTO permissions (title, body, modulle_id, student_id) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, body, modulle_id, student_id], (err, results) => {
    if (err) throw err;
    res.json({ permissionId: results.insertId, message: 'permission created successfully' });
  });
});

router.get('/addpermissions', (req, res) => {
    res.render('permissionForm');
  });

// Handle the creation of a new permission
router.post('/permissions', (req, res) => {
  const { title, body, modulle_id, student_id } = req.body;

  const insertQuery = 'INSERT INTO permissions (title, body, modulle_id, student_id) VALUES (?, ?, ?, ?)';
  connection.query(insertQuery, [title, body, modulle_id, student_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating the permission' });
    }
    res.redirect('/permissions');
  });
});

// Render all permissions
router.get('/permissions', (req, res) => {
  const query = 'SELECT * FROM permissions';
  connection.query(query, (error, permissions) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching permissions' });
    }
    res.render('permissions', { title: 'All permissions', permissions });
  });
});

// Render the form to edit a permission
router.get('/permissions/:permissionId/edit', (req, res) => {
  const permissionId = req.params.permissionId;
  const query = 'SELECT * FROM permissions WHERE id = ?';
  connection.query(query, [permissionId], (error, permission) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching the permission' });
    }
    if (permission.length > 0) {
      res.render('editpermissionForm', { title: 'Edit permission', permission: permission[0] });
    } else {
      res.status(404).json({ message: 'permission not found' });
    }
  });
});

// Handle the update of a permission
router.post('/permissions/:permissionId/edit', (req, res) => {
  const permissionId = req.params.permissionId;
  const { title, body, modulle_id, student_id } = req.body;

  const updateQuery = 'UPDATE permissions SET title = ? , body = ?, modulle_id = ?, student_id = ? WHERE id = ?';
  connection.query(updateQuery, [title, body, modulle_id, student_id, permissionId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating the permission' });
    }
    res.redirect('/permissions');
  });
});

// Handle the deletion of a permission
router.post('/permissions/:permissionId/delete', (req, res) => {
  const permissionId = req.params.permissionId;
  const deleteQuery = 'DELETE FROM permissions WHERE id = ?';
  connection.query(deleteQuery, [permissionId], (error) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting the permission' });
    }
    res.redirect('/permissions');
  });
});

module.exports = router;


