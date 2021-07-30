const { Schema, model } = require('mongoose');
// const Populate = require('../util/autopopulate');

const postSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  fee: { type: String, required: true },
  est_time: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],

});

// postSchema
//   .pre('findOne', Populate('author'))
//   .pre('find', Populate('author'));

module.exports = model('Restuarant', postSchema);