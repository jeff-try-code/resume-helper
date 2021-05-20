
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productStylesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags:{
    type:['String']
  },
  projects: {
    type: ['Mixed'],
  }
});

const productStyles = mongoose.model('ProductStyles', productStylesSchema, 'data')

module.exports = productStyles