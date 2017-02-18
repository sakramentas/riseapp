'use strict';

// Configuring the Transactions module
angular.module('dashboards').run(['Menus',
  function (Menus) {
    // Add the dashboard dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Transactions',
      state: 'dashboard',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'dashboard', {
      title: 'List Transactions',
      state: 'dashboard.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'dashboard', {
      title: 'Create Transaction',
      state: 'dashboard.create',
      roles: ['user']
    });
  }
]);
