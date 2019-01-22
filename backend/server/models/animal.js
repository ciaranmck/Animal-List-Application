const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  species: String,
  habitat: String,
  info: String,
  img: String,
});

module.exports = mongoose.model('animal', animalSchema, 'animals');
