angular.module('sample', []).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.openMenu=function(num){
				$scope.menu=num;
			}
			$scope.closeMenu=function(){
				$scope.menu=0;
			}
		} ]);