describe('HelloWorld Component', function () {

    var $componentController, ctrl;
    
      beforeEach(angular.mock.module('hello-world'));
      beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_; 
        ctrl = $componentController('helloWorld', null, {});
        
      }));

      describe('getGreetings()', function(){

        it('should have the getName function', function(){
            expect(ctrl.getGreetings).toBeDefined;
        });

        it('should return hello', function(){
            expect(ctrl.getGreetings()).toBe('Hello World');
        });
      });

});