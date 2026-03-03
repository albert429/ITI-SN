angular
  .module('myApp')
  .controller('StudentsController', function ($scope, StudentsService) {
    $scope.students = [];
    $scope.loading = false;

    $scope.loadStudents = function () {
      $scope.loading = true;

      StudentsService.getStudents()
        .then(function (response) {
          $scope.students = response.data || [];
        })
        .catch(function (error) {
          console.log('Error loading students', error);
        })
        .finally(function () {
          $scope.loading = false;
        });
    };
  });
