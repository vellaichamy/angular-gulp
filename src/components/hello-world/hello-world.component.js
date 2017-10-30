(function () {
    'use strict';
    angular
        .module('hello-world', ['profile'])
        .component('helloWorld', {
            templateUrl: 'components/hello-world/hello-world.template.html',
            controller: helloWorldCtrl,
        });


    helloWorldCtrl.$inject = [];
    function helloWorldCtrl() {
        var $ctrl = this;
        $ctrl.getGreetings =  function(){
            return 'Hello World';
        }
    }
})();


