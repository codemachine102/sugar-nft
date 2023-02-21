const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true
  }
});

AssetSchema.plugin(uniqueValidator)

module.exports = mongoose.model('assets', AssetSchema);
