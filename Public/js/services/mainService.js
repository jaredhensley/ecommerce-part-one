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

  this.addProduct = function (product) {
    console.log('test');
    console.log(product);
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/products',
      data: {
        Title: product.Title,
        Quantity: product.Quantity,
        Description: product.Description,
        Price: product.Price
      }
    }).then(function (res) {
      console.log(res);
      return res;
    })

  }

  this.editProduct = function (product) {
    console.log(product);
    return $http({
      method: 'PUT',
      url: 'http://localhost:8080/products/' + product._id,
      data: {
        Title: product.Title,
        Quantity: product.Quantity,
        Description: product.Description,
        Price: product.Price
      }
    }).then(function (res) {
      console.log(res);
      return res;
    })

  };

  this.deleteProduct = function (product) {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:8080/products/' + product._id
    })

  };

});