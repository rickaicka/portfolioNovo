angular.module('Main').controller('PortfolioController', function($scope, $http){
    
    $scope.cases = [];
    
    $http.get('/portfolio')
    .success(function(data){
        $scope.cases = data;
    })
    .error(function(statusText){
        console.log("Não foi possível obter lista de Cases do Portfolio");
        console.log(statusText);
    })
    
})
