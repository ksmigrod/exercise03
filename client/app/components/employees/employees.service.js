export class EmployeesService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }
    getEmployees() {
        return this.$http.get('http://localhost:8080/exercise02/employees').then(response => response.data);
    }
}
