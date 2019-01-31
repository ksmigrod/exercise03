function employeesRoutes($stateProvider) {
  "ngInject";
  $stateProvider
    .state('employees', {
      url: '/employees',
      component: 'employees'
    });
}

/* @ngInject */
export default employeesRoutes;
