angular.module('myApp').service('StudentsService', function ($http) {
  const API_URL = 'https://spnuxpfrtluagbirquiv.supabase.co/rest/v1/users';

  const config = {
    headers: {
      apikey: 'sb_publishable_iBx7OvsnV3GiQw4FKLhWKA_p4QpRnKo',
      Authorization: 'Bearer sb_publishable_iBx7OvsnV3GiQw4FKLhWKA_p4QpRnKo',
      'Content-Type': 'application/json',
    },
  };

  this.getStudents = function () {
    return $http.get(API_URL, config);
  };

  this.getStudentById = function (userId) {
    return $http.get(API_URL + '?id=gt.' + userId, config);
  };
});
