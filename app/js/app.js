'use strict';

// Declare app level module which depends on filters, and services
angular.module('dazzle', [
    'dazzle.config',
    'dazzle.controllers',
    'dazzle.decorators',
    'dazzle.directives',
    'dazzle.filters',
    'dazzle.routes',
    'dazzle.services'
  ])

  .run(['simpleLogin', function(simpleLogin) {
    console.log('run'); //debug
    simpleLogin.getUser();
  }])
