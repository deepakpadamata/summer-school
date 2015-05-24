'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  rollNumber: { type: String, required: true},
  department: {type: Schema.Types.ObjectId, ref: 'Department'},
  email: String
});

module.exports = mongoose.model('Student', StudentSchema);