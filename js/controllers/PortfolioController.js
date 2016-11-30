angular.module('Main').controller('PortfolioController', function($scope, $resource){
    
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
    $scope.init();
})
