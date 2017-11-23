angular.module('Main').controller('PortfolioListaController', function(AppConfigs, $scope, $routeParams, $resource){
    
    var Cases = $resource(AppConfigs.apiEndpoint + '/job/public/jobs');
    
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
