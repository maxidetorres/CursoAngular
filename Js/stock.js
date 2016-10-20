angular.module('stockApp', [])
  .controller('stockController', function($scope) {
      $scope.productos=[
          {codigo:'AB001', descripcion:'Futbol', precio: 20 , nota:'En oferta',imagen:'001.jpg'},
          {codigo:'AC002', descripcion:'Auto', precio: 3500, nota:'Novedad',imagen:'002.jpg'},
          {codigo:'AD003', descripcion:'Nokia 1100', precio: 35, nota:'Producto antiguo',imagen:'003.jpg'},
          {codigo:'AE004', descripcion:'Zapatillas', precio: 40 , nota:'Zapatillas de outlet',imagen:'004.jpg'},
          {codigo:'AF005', descripcion:'Guitarrass', precio: 3500, nota:'Guitarra de colección utilizada en show de the beatles',imagen:'005.jpg'},
      ];

     $scope.guardar=function(){
  	$scope.productos.push({codigo: $scope.codigo,
  							descripcion: $scope.descripcion,
  							precio: $scope.precio,
  							nota: $scope.nota,
  							imagen: null,
  							 });

  };
});