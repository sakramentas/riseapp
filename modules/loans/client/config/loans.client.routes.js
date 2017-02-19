(function () {
  'use strict';

  angular
    .module('loans')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('loans', {
        abstract: true,
        url: '/loans',
        template: '<ui-view/>'
      })
      .state('loans.list', {
        url: '',
        templateUrl: 'modules/loans/client/views/list-loans.client.view.html',
        controller: 'LoansListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Loans List'
        }
      })
      .state('loans.create', {
        url: '/create',
        templateUrl: 'modules/loans/client/views/form-loan.client.view.html',
        controller: 'LoansController',
        controllerAs: 'vm',
        resolve: {
          loanResolve: newLoan
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Loans Create'
        }
      })
      .state('loans.edit', {
        url: '/:loanId/edit',
        templateUrl: 'modules/loans/client/views/form-loan.client.view.html',
        controller: 'LoansController',
        controllerAs: 'vm',
        resolve: {
          loanResolve: getLoan
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Loan {{ loanResolve.name }}'
        }
      })
      .state('loans.view', {
        url: '/:loanId',
        templateUrl: 'modules/loans/client/views/view-loan.client.view.html',
        controller: 'LoansController',
        controllerAs: 'vm',
        resolve: {
          loanResolve: getLoan
        },
        data: {
          pageTitle: 'Loan {{ loanResolve.name }}'
        }
      });
  }

  getLoan.$inject = ['$stateParams', 'LoansService'];

  function getLoan($stateParams, LoansService) {
    return LoansService.get({
      loanId: $stateParams.loanId
    }).$promise;
  }

  newLoan.$inject = ['LoansService'];

  function newLoan(LoansService) {
    return new LoansService();
  }
}());
