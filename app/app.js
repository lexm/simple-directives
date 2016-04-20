var app = angular.module('app', []);

app.directive('kittyList', function() {
  return {
    restrict: 'E',
    templateUrl: './app/templates/kittyList.html'
  }
})
