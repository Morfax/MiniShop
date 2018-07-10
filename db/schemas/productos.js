var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
  name: String,
  cost: Number
});

var Prodcuto = mongoose.model('Prodcuto', productoSchema);

module.exports = Prodcuto;