app.controller(
  'UserDetailController',
  function ($scope, $routeParams, StudentsService) {
    $scope.name = 'AngularJS User Detail Controller';
    $scope.userId = $routeParams.userId;
    console.log('User ID from route:', $scope.userId);

    StudentsService.getStudentById($scope.userId)
      .then(function (response) {
        $scope.user = response.data[0];
      })
      .catch(function (error) {
        console.log('Error fetching user details', error);
      });
  }
);
