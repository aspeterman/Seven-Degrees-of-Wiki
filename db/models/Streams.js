var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var streamSchema = new Schema({
  title: String,
  description: String,
  url: String
});

var Streams = mongoose.model('Streams', streamSchema);

module.exports = Streams;
