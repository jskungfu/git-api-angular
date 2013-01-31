'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).
factory('Github', ['$resource', '$http', function($resource, $http) {
    return {
		list: $resource('https://api.github.com/users/:user/followers?per_page=100&page=:pagenum', {user: '@user', pagenum: '@pagenum'}),
		user: $resource('https://api.github.com/users/:user', {user: '@user'})
    };
}]);

