console.log('JS');

var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/characters.html',
    controller: 'DefaultController as dc'
  }).when('/animal', {
    templateUrl: 'views/partials/animal.html'
  }).when('/yogi', {
    templateUrl: 'views/partials/yogi.html'
  }).when('/smurf', {
    templateUrl: 'views/partials/smurf.html'
  });
});

app.controller('DefaultController', DefaultController);


function DefaultController() {
  console.log('DefaultController is loaded');
  var vm = this;

}
