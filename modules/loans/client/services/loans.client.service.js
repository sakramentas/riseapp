// Loans service used to communicate Loans REST endpoints
(function () {
  'use strict';

  angular
    .module('loans')
    .factory('LoansService', LoansService);

  LoansService.$inject = ['$resource'];

  function LoansService($resource) {
    return $resource('api/loans/:loanId', {
      loanId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
