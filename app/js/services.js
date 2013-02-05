'use strict';

/* Services */

// angular.module('myApp.services', ['ngResource']).

Gitbud.factory('Github', ['$resource', '$http', function($resource, $http) {
	return {
		following_info: $resource('https://api.github.com/users/:user/following?per_page=100&page=:pagenum', {
			user: '@user',
			pagenum: '@pagenum'
		}),
		user_info: $resource('https://api.github.com/users/:user', {
			user: '@user'
		})
	};
}]);