'use strict';

/**
 * Module dependencies.
 */
var bankDetailsPolicy = require('../policies/bankDetails.server.policy'),
  bankDetails = require('../controllers/bankDetails.server.controller');

module.exports = function (app) {
    
  // bankDetails collection routes
  app.route('/api/bankDetails').all(bankDetailsPolicy.isAllowed)
    .get(bankDetails.getInformation);
  
};
