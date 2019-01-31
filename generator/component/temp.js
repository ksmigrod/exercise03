import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uirouter
])

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
