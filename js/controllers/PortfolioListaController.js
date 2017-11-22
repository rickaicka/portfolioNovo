angular.module('Main').controller('PortfolioListaController', function($scope, $routeParams, $resource){
    
    var Cases = $resource('http://507653c7.ngrok.io/v1/job/public/jobs');
    
    $scope.init = function(){
        buscaCases();
    };
    
    $scope.init();
    
    function buscaCases(){
        
        Cases.get(function(result){
                $scope.cases = result.data;
        });
    };
})
