const { Pool } = require('pg');

const PG_URI =
  'postgres://zoszwsct:3VvqfB9_GFyMZULPbXOAW3pjXt8aqVFF@suleiman.db.elephantsql.com:5432/zoszwsct';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query -->', text);
    return pool.query(text, params, callback);
  },
};
