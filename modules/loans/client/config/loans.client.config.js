'use strict';

// Configuring the Loans module
angular.module('loans').run(['Menus',
  function (Menus) {
    // Add the dashboard dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Loans',
      state: 'loans',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'loans', {
      title: 'List Loans',
      state: 'loans.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'loans', {
      title: 'Create Loan',
      state: 'loans.create',
      roles: ['user']
    });
  }
]);
