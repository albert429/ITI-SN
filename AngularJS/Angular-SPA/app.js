var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users',
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'StudentsController',
    })
    .when('/userdetail/:userId', {
      templateUrl: 'views/userdetail.html',
      controller: 'UserDetailController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
    })
    .otherwise({
      redirectTo: '/',
    });
});
