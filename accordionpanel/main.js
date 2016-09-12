angular.module('sample', ['ngAnimate']).controller('IndexController',
		[ '$scope', function($scope) {
			
			$scope.onClickHeader=function(num){
				if($scope.showPanel==num){
					$scope.showPanel=0;
				}else{
					$scope.showPanel=num;
				}
			}
			
		} ]);