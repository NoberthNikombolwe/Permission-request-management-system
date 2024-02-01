
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prms_db_dit',
  });
  
  connection.connect();
  module.exports = connection;
  