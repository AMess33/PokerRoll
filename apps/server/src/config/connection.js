const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://AMesser:bGHHP9MNANRkKS3a@cluster0.hrluy6c.mongodb.net/';

connect(connectionString);

module.exports = connection;
