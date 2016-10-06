angular.module('stockApp', [])
  .controller('stockController', function($scope) {
      $scope.productos=[
          {codigo:'001', descripcion:'Futbol', precio: 20 , nota:'En oferta'},
          {codigo:'002', descripcion:'Carro', precio: 3500, nota:'Novedad'},
          {codigo:'003', descripcion:'Nokia 1100', precio: 35, nota:'Producto antiguo'},
      ];
});