var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('DeveloperCtrl', function($scope) {
  $scope.user = {
    name: 'awesome user'
  };
});