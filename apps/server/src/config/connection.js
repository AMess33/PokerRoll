const { connect, connection } = require('mongoose');
require('dotenv').config()

const connectionString =
  process.env.DATABASE_CONNECTION;

connect(connectionString);

module.exports = connection;
