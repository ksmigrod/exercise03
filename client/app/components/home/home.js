import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uirouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
