"use strict";

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/MushroomList.html',
		controller: 'MushroomCtrl'
	}).otherwise('/');
});

console.log('hiya');