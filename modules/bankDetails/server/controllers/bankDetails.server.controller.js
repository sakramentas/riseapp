'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  BankDetails = mongoose.model('BankDetails'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  apiHelper = require('../api/apiHelper');
/**
 * Create a BankDetails
 */
exports.create = function (req, res) {
  var bankDetails = new BankDetails(req.body);
  bankDetails.user = req.user;

  bankDetails.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(bankDetails);
    }
  });
};


exports.getInformation = function (req, res) {
  var bankDetails = new BankDetails(req.body);
  bankDetails.user = req.user;
  apiHelper.getCurrentAccounBalance(bankDetails,res);
  
};



