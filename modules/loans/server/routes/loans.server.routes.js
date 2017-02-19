'use strict';

/**
 * Module dependencies
 */
var loansPolicy = require('../policies/loans.server.policy'),
  loans = require('../controllers/loans.server.controller');

module.exports = function(app) {
  // Loans Routes
  app.route('/api/loans').all(loansPolicy.isAllowed)
    .get(loans.list)
    .post(loans.create);

  app.route('/api/loans/:loanId').all(loansPolicy.isAllowed)
    .get(loans.read)
    .put(loans.update)
    .delete(loans.delete);

  // Finish by binding the Loan middleware
  app.param('loanId', loans.loanByID);
};
