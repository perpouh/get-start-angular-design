angular.module('sample', ['ngAnimate']).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.imgSrc="img/photo1.jpg";
			$scope.sw=true;
			$scope.margin=0;
			$scope.myStyle={'margin-left':$scope.margin+'px'};
				
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
				$scope.margin-=300;
				$scope.myStyle={'margin-left':$scope.margin+'px'};
			}
			
			$scope.prev=function(){
				$scope.margin+=300;
				$scope.myStyle={'margin-left':$scope.margin+'px'};
			}
		} ]);