const { Schema, model } = require('mongoose');

let restaurantSchema = new Schema({
  title: { type: String, required: true },
  platform: { type: String, required: true},
  price: { type: String, required: true },
  time: { type: String, required: true },
  picture: { type: String, required: true }
}, {
  collection: 'restaurants'
})

module.exports = model('Restaurant', restaurantSchema)