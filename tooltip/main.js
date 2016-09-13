angular.module('sample', []).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.showTip=function(event,num){
				$scope.tip=num;
				$scope.toolTipStyle={'left':event.offsetX+'px','top':event.offsetY+'px'};
			}
			
			$scope.moveTip=function(event){
				$scope.toolTipStyle={'left':event.offsetX+'px','top':event.offsetY+'px'};
			}
		} ]);