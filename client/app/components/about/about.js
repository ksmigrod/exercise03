import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uirouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.component('about', aboutComponent)
  
.name;

export default aboutModule;
