'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var BankDetailsSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  customerId:{
    type: String
  },
  accountId : {
    type: String
  },
  currentAccountBalance: {
    type: String
  },
  pastAccountBalance : {
    type: Array,
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('BankDetails', BankDetailsSchema);
