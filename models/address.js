const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  "address_components": {
    type: Array
  },
  "formatted_address": {
    type: String,
    required: true,
    unique: true
  },
  "geometry": {
    type: Object
  },
  "place_id": {
    type: String
  },
  "types": {
    type: Array
  },
  "isRooftop": {
    type: Boolean
  }
});

module.exports = mongoose.model('Address', AddressSchema);
