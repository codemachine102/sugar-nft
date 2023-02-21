const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  lockedTime: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('configs', ConfigSchema);
