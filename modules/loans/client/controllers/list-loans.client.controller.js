(function () {
  'use strict';

  angular
    .module('loans')
    .controller('LoansListController', LoansListController);

  LoansListController.$inject = ['LoansService'];

  function LoansListController(LoansService) {
    var vm = this;

    vm.loans = LoansService.query();
  }
}());
