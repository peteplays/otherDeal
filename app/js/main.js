//@ngInject
module.exports = ['$scope', '$http', function($scope, $http) {

    console.log('this is awesome!!!!!');

    var hi = document.getElementById('helloFromJs');
    hi.innerHTML += '<em>Hello...</em> from <kbd>app/js/</kbd> <code>main.js</code>!!! <small>this is the <code>bundle.js</code> file served from <kbd>www/js/</kbd></small>';

    $scope.hello = 'Hello From Angular';
    $scope.isCollapsed = true;

    $scope.dbActive = false;

    //-- WIP
    $scope.submitOnEnter = function(funcName, data, fieldNames) {
        if(funcName != 'postUpdateVal' && funcName != 'postInsertName') {
            $scope[funcName](data[0]);
        } else if( (funcName == 'postUpdateVal' || funcName =='postInsertName') && data[0] !== null && data[2] !== null) {
            $scope[funcName](data[0], data[1], data[2]);
        }
        $scope.clearInput(fieldNames);
    };

    $scope.clearInput = function(clearInputsArr) {
        clearInputsArr.forEach(function(inputModel) {
            $scope[inputModel] = '';
        });
    };

    var db = require('../../resources/db/mongodb/mongoDBUI.js');
    db($scope, $http);

}];