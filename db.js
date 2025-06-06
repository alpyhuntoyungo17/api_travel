const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travel',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL Database!');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to MySQL Database:', err);
  });

module.exports = pool;
