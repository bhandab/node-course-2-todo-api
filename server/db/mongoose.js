var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//process.env.MONGODB_URI is the URI for Mlab integrated with heroku
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};