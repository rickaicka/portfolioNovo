angular.module('Main').controller('PortfolioController', function($scope, $routeParams, $resource){
    
    $scope.cases = [];
    $scope.filtro = '';
    /*
               FTP

    var Case = $resource('/nd-admin/portfolio/:id');
    var Cases = $resource('/nd-admin/portfolio');*/

    var Case = $resource('/portfolio/:id');
    var Cases = $resource('/portfolio');
    
    $scope.init = function(){
        buscaCases();
    };
    
    function buscaCases(){
        Cases.query(
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
