// JavaScript Document
var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

//Adding the date to the top of the page
function DateCtrl($scope){
	$scope.getCurrentDate = function () {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	
	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
	document.getElementById('todayDate').innerHTML = today;
	}
}

//Adding and editing a developer
function DeveloperCtrl($scope){
	console.log("Edit user");
	$scope.user = {
    name: 'First and Last Name',
	email: 'first.last@ogilvy.com',
    telephone: '123-456-7890'
	}	
};

//Adding and removing a project to the list for a developer  
function TodoCtrl($scope){
	
	$scope.todos = [ ];
	
	$scope.getTotalTodos = function (){
		return $scope.todos.length;
	};
	
	 $scope.clearCompleted = function () {
		var result = confirm("Want to delete?");
			if (result==true) {
			$scope.todos = _.filter($scope.todos, function(todo){
				return !todo.done;
			});
		}
    };
	
	$scope.addTodo = function (){
		$scope.todos.push({ text: $scope.formTodoText, done:false });
		$scope.formTodoText ='';
	};
		
}