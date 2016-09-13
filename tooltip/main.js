angular.module('sample', []).controller('IndexController',
		[ '$scope', '$timeout', function($scope, $timeout) {
			$scope.showTip=function(event,num){
				$scope.tip=num;
				$scope.toolTipStyle={'left':'350px','top':'-8px'};
			}
			
			$scope.hideTip=function(){
				$timeout(function(){
					$scope.tip=0;
				},3000);
			}
		} ]);