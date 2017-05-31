"use strict";

app.factory('MushroomFactory', function($q, $http){
	let getShrooms = () => {
		return $q((resolve, reject) => {
			$http.get("https://shrooms-f5734.firebaseio.com/.json")
			.then((data) => {
				console.log(data);
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getShrooms};
});