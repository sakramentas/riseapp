'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('Loan'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Loan
 */
exports.create = function(req, res) {
  var loan = new Loan(req.body);
  loan.user = req.user;

  loan.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(loan);
    }
  });
};

/**
 * Show the current Loan
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var loan = req.loan ? req.loan.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  loan.isCurrentUserOwner = req.user && loan.user && loan.user._id.toString() === req.user._id.toString();

  res.jsonp(loan);
};

/**
 * Update a Loan
 */
exports.update = function(req, res) {
  var loan = req.loan;

  loan = _.extend(loan, req.body);

  loan.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(loan);
    }
  });
};

/**
 * Delete an Loan
 */
exports.delete = function(req, res) {
  var loan = req.loan;

  loan.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(loan);
    }
  });
};

/**
 * List of Loans
 */
exports.list = function(req, res) {
  Loan.find().sort('-created').populate('user', 'displayName').exec(function(err, loans) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(loans);
    }
  });
};

/**
 * Loan middleware
 */
exports.loanByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Loan is invalid'
    });
  }

  Loan.findById(id).populate('user', 'displayName').exec(function (err, loan) {
    if (err) {
      return next(err);
    } else if (!loan) {
      return res.status(404).send({
        message: 'No Loan with that identifier has been found'
      });
    }
    req.loan = loan;
    next();
  });
};
