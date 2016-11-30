angular.module('Main', ['ngRoute',  'iso.directives']).config(function($routeProvider){

    $routeProvider.when('/index', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.when('/', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.when('/portfolio', {
        templateUrl:'partials/portfolio.html',
        controller: 'PortfolioController'
    });
    
    $routeProvider.when('/portfolio/:caseId', {
        templateUrl:'partials/case.html',
        controller:'PortfolioController'
    })

    $routeProvider.otherwise({redirectTo:'/'})
});
