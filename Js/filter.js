'use strict';
var app = angular.module('stockApp');
app.filter('filterCodigo', function(){
    return function(input){
        var valor="";
        var prefijo= input.substr(0,2);
        var subfijo= input.substr(2);
        valor= prefijo +'-'+subfijo;
        return valor; 
    };  
});
