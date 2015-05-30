var moduleApp = angular.module('mainApp', []);

moduleApp.controller('HomeController',['$scope',function($scope) {
    
}]);

moduleApp.controller('ProjectController',['$scope',function($scope) {
    
}]);

moduleApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
        when('/project/:projectId', {
            templateUrl: 'partials/project.html',
            controller: 'ProjectController'
        }).
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);