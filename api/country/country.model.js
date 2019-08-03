const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name_pl: {type: String, trim: true, required: true},
  name_en: {type: String, trim: true, required: true},
  code: {type: String, trim: true, required: true},
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;