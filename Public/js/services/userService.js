angular.module('myApp').service('userService', function ($http) {


  this.addUser = function (userObj) {
    return $http({
      method: 'POST',
      url: '/users',
      data: userObj
    });
  }

  this.loginUser = function (credentials) {
    return $http({
      method: 'GET',
      url: '/users/' + credentials.username
    })
  }

});