(function (angular) {
	'use strict';
	/*创建一个模块*/
	var myapp = angular.module('myapp',[]);
	/*创建一个控制器来初始化数据*/
	myapp.controller('mycontroller',['$scope',function($scope){
		/*输入框*/
		$scope.text = '';
		/*列表*/
		$scope.data=[{
			id:1,
			name:'吃饭',
			completed:false

		},{
			id:2,
			name:'睡觉',
			completed:false

		},{
			id:3,
			name:'打豆豆',
			completed:true
		}];
	/*添加待办事项*/
		$scope.add =function(){
			/*不能为空*/
			if($scope.text != ''){
				$scope.data.push(
					{
						id:+new Date(),
						name:$scope.text,
						completed:false
					})
			}

			$scope.text='';
		};
	/*删除*/
	$scope.remove = function(id){
		for(var i=0; i<$scope.data.length; i++){
			if(id === $scope.data[i].id){
				$scope.data.splice(i,1);
				break
			}
		}
	};

		/* Clear completed 清理完成的项目*/
		$scope.clear = function(){
			$scope.clears=[];//	定义完成项目为一个数组
			for(var j=0; j<$scope.data.length;j++){//把完成的装进一个数组里
				if($scope.data[j].completed === !true){
					$scope.clears.push($scope.data[j]);
				}
			}
			/*console.log($scope.clears);*/
			$scope.data = $scope.clears;//重新绑定数组
		};
	/*是否显示 清空已完成*/
		$scope.toggleShowHide = function(){
			for(var i=0; i<$scope.data.length;i++){
				if($scope.data[i].completed === true){
					return true
				}
			}
			return false
		};
	/*双击编辑*/
		/*class="editing"*/
		$scope.editing = -1;
		/*双击编辑*/
		$scope.db = function(id,completed){
			/*已完成的任务不许编辑*/
			if(completed == !true){
				$scope.editing = id;
			}
		};
		/*停止编辑*/
		$scope.save = function(){
			$scope.editing = -1;
		}



	}])


})(angular);
