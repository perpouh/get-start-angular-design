angular.module('sample', []).controller('IndexController',
		[ '$scope', function($scope) {
			$scope.dataList=[
			                 	{
			                 		name:'Yamada Tarou',
			                 		birthday:'1979-06-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Tanaka Daisuke',
			                 		birthday:'1975-11-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Sato Hanako',
			                 		birthday:'1985-11-23',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Yamada Jiro',
			                 		birthday:'1979-06-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Tanaka Hanako',
			                 		birthday:'1975-11-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Nishihata Kazuma',
			                 		birthday:'1979-06-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Shimizu Daisuke',
			                 		birthday:'1979-11-23',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 	{
			                 		name:'Tanaka Jiro',
			                 		birthday:'1979-11-05',
			                 		phone:'090-1234-5678',
			                 		mail:'example@perpouh.net'
			                 	},
			                 ];
			
			// 縦ハイライト
			$scope.selectCol=function(col){
				$scope.selectedCol=col;
			}
		} ]);