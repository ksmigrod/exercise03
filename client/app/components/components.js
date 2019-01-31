import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import employeesModule from "./employees/employeesModule";

let componentModule = angular.module('app.components', [
  Home,
  About,
  employeesModule,
])

.name;

export default componentModule;
