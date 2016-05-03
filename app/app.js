require('angular/angular.min');
require('angular-animate/angular-animate.min');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');

var theApp = angular.module('theApp', [
    'ui.bootstrap',
    'ngAnimate',
])
.controller('template', require('./js/main.js'))
;