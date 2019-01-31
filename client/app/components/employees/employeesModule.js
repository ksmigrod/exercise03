import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';
import employeesRoutes from './employees.route';

let employeesModule = angular
        .module('employees',[uirouter])
        .service('EmployeesService', EmployeesService)
        .component('employees', EmployeesComponent)
        .config(employeesRoutes)
        .name;

export default employeesModule;
