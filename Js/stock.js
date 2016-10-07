angular.module('stockApp', [])
  .controller('stockController', function($scope) {
      $scope.productos=[
          {codigo:'001', descripcion:'Futbol', precio: 20 , nota:'En oferta',imagen:'001.jpg'},
          {codigo:'002', descripcion:'Carro', precio: 3500, nota:'Novedad',imagen:'002.jpg'},
          {codigo:'003', descripcion:'Nokia 1100', precio: 35, nota:'Producto antiguo',imagen:'003.jpg'},
      ];
});