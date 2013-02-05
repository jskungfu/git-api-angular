'use strict';


var Gitbud = angular.module('myApp', ['myApp.filters', 'myApp.directives', 'ngResource']);

// Declare app level module which depends on filters, and services

Gitbud.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'partials/partial1.html',
		controller: MyCtrl1
	}).
	when('/view2', {
		templateUrl: 'partials/partial2.html',
		controller: MyCtrl2
	}).
	otherwise({
		redirectTo: '/view1'
	});
}]);