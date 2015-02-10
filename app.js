(function($scope){
	'use strict';

	var app = angular.module('library', []);

	app.controller('AuthorsListController', ['$http', function($http){
		var persons = this;
		persons.authors = [];
		$http.get('./data/authors.json').success(function(data){
			persons.authors = data;
		});
	}]);

	app.controller('BooksListController', ['$http', function($http){
		var literature = this;
		literature.books = [];
		$http.get('./data/books.json').success(function(data){
			literature.books = data;
		})
	}]);

	app.controller('testController', ['$scope', function($scope){
		$scope.checkId = function(value){
			$scope.authorId = value;
		};
	}]);

})();

