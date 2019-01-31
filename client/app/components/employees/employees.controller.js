class EmployeesController {
  constructor(EmployeesService) {
    'ngInject';
    this.EmployeesService = EmployeesService;
  }
  $onInit() {
    this.EmployeesService.getEmployees().then((employees) => {this.employees = employees;});
  }
}

export default EmployeesController;
