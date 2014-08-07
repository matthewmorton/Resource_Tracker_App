// JavaScript Document
function TodoCtrl($scope){
	
	$scope.todos = [
	
	{text:"learn angular" , done:false},
	{text:"Delete Facebook" , done:false}
	
	];
	
	$scope.getTotalTodos = function (){
		return $scope.todos.length;
	};
	
	 $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
	
	$scope.addTodo = function (){
		$scope.todos.push({ text: $scope.formTodoText, done:false });
		$scope.formTodoText ='';
	};
}