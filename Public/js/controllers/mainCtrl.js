angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getProducts = function () {
    mainService.getProducts().then(function (res) {
      console.log(res);
      $scope.products = res.data;
    });
  }

  $scope.addProduct = function (product) {
    mainService.addProduct(product).then(function (res) {
      console.log(res);
      $scope.getProducts();
    });
  }

  $scope.editProduct = function (product) {
    console.log(product);
    mainService.editProduct(product).then(function (res) {
      console.log(res);
      $scope.getProducts();
    });
  }

  $scope.deleteProduct = function (product) {
    console.log(product);
    mainService.deleteProduct(product).then(function (res) {
      console.log(res);
      $scope.getProducts();
    });

  }

  $scope.getProducts();

});