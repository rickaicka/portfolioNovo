angular.module('Main').controller('PortfolioCaseController', function(AppConfigs, $scope, $routeParams, $resource){
    
    
    var Case = $resource(AppConfigs.apiEndpoint + '/job/public/findJob/:id');
    
    Case.get({id: $routeParams.caseId},
            function(result){
                $scope.casePortfolio = result.data;
            },
            function(erro){
                console.log("Não foi possível obter case");
                console.log(erro);
            }
       );

})
