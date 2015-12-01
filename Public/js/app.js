angular.module('myApp', ['ui.router'])



.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../templates/homeTmpl.html',
      controller: 'mainCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '../templates/adminTmpl.html',
      controller: 'adminCtrl'
    });
});