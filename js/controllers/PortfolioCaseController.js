angular.module('Main').controller('PortfolioCaseController', function($scope, $routeParams, $resource){
    
    
    var Case = $resource('http://507653c7.ngrok.io/v1/job/public/findJob/:id');
    
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
