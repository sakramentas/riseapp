(function () {
  'use strict';

  // Loans controller
  angular
    .module('loans')
    .controller('LoansController', LoansController);

  LoansController.$inject = ['$scope', '$state', '$window', 'Authentication', 'loanResolve'];

  function LoansController ($scope, $state, $window, Authentication, loan) {
    var vm = this;

    vm.authentication = Authentication;
    vm.loan = loan;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Loan
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.loan.$remove($state.go('loans.list'));
      }
    }

    // Save Loan
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.loanForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.loan._id) {
        vm.loan.$update(successCallback, errorCallback);
      } else {
        vm.loan.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('loans.view', {
          loanId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
