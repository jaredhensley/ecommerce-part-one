angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getProducts = function () {
    mainService.getProducts().then(function (res) {
      console.log(res);
      $scope.products = res.data;
    });
  }

  $scope.editProduct = function (product) {
    mainService.editProduct(product).then(function (res) {
      console.log(res);
      $scope.getProducts();
    });

  }

  $scope.getProducts();

});