import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uirouter
])

.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
