angular.module('sample', []).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.showTip=function(event,num){
				$scope.tip=num;
				$scope.toolTipStyle={'left':'350px','top':'-8px'};
			}
		} ]);