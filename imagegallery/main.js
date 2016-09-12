angular.module('sample', ['ngAnimate']).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.imgSrc="img/photo1.jpg";
			$scope.sw=true;
			$scope.myStyle={'margin-left':$scope.margin+'px'};
			$scope.page=1;
				
			$scope.changeMainImage=function(imgSrc){
				if($scope.sw){
					$scope.imgSrc1=imgSrc;
					$scope.sw=false;
				}else{
					$scope.imgSrc2=imgSrc;
					$scope.sw=true;
				}
				
			};
			
			$scope.next=function(){
				$scope.page++;
			}
			
			$scope.prev=function(){
				$scope.page--;
			}
		} ]);