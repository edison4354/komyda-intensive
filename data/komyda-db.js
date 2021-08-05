/* Mongoose Connection */
const mongoose = require('mongoose');
assert = require('assert');
const url = process.env.DATABASE_URL || 'mongodb+srv://test:test@cluster0.uch26.mongodb.net/testing_scraper?retryWrites=true&w=majority'

mongoose.connect(
  url,
  {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
  },
  (err) => {
    assert.equal(null, err);
    console.log("Connected successfully to database");
    // turn on for testing
    // db.close();
  }
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

module.exports = mongoose.connection;