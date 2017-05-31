"use strict";

app.controller("MushroomCtrl", function($scope, MushroomFactory) {
	MushroomFactory.getShrooms()
	.then(function(collection) {
		$scope.mushrooms = collection.data.mushrooms;
		console.log("shrooms", $scope.mushrooms);
	});
});