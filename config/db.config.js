const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'first_app',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;