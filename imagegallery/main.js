angular.module('sample', []).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.imgSrc="img/photo1.jpg";
				
			$scope.changeMainImage=function(imgSrc){
				$scope.imgSrc=imgSrc;
			};
		} ]);