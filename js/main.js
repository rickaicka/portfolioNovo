angular.module('Main', ['ngRoute', 'iso.directives', 'ngResource', 'angular-carousel']).config(function($routeProvider){

    $routeProvider.when('/index', {
        templateUrl:'partials/home.html'
    });

    $routeProvider.when('/', {
        templateUrl:'partials/home.html'
    });

    $routeProvider.when('/portfolio', {
        templateUrl:'partials/portfolio.html',
        controller: 'PortfolioListaController'
    });
    
    $routeProvider.when('/portfolio/:caseId', {
        templateUrl:'partials/case.html',
        controller:'PortfolioCaseController'
    });

    $routeProvider.when('/servicos', {
        templateUrl:'partials/servicos.html'
    });

    $routeProvider.when('/contato', {
        templateUrl:'app/views/contato.ejs'
    });

    $routeProvider.otherwise({redirectTo:'/'})
});
