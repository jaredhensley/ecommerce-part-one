angular.module('myApp').service('mainService', function ($http) {

  this.getProducts = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:8080/products'
    }).then(function (res) {

      console.log(res);
      return res;

    });
  };

  this.editProduct = function (product) {
    console.log(product);
    return $http({
      method: 'PUT',
      url: 'http://localhost:8080/products/' + product._id,
      data: {
        name: product.newName
      }
    }).then(function (res) {
      console.log(res);
      return res;
    })

  };

  this.deleteProduct = function (productID) {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:8080/products/' + productID
    })

  };

});