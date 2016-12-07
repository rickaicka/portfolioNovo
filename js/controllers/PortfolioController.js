angular.module('Main').controller('PortfolioController', function($scope, $routeParams, $resource){
    
    $scope.cases = [];
    $scope.filtro = '';
    var Case = $resource('/portfolio/:id');
    
    $scope.init = function(){
        buscaCases();
    };
    
    function buscaCases(){
        Case.query(
            function(cases){
                $scope.cases = cases;
            }, function(erro){
                console.log("Não foi possível obter lista de cases");
                console.log(erro);
            }
        );
    };

    Case.get({id: $routeParams.caseId},
            function(casePortfolio){
                $scope.casePortfolio = casePortfolio;
            },
            function(erro){
                console.log("Não foi possível obter case");
                console.log(erro);
            }
       );

    $scope.init();
})
