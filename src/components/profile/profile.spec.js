describe('Profile component', function () {

    var $componentController, ctrl, bindings;

    beforeEach(angular.mock.module('hello-world'));

    beforeEach(inject(function (_$componentController_) {
        bindings = {
            firstname: 'Ugrasenan',
            lastname: 'Vellaichamy'
        }
        $componentController = _$componentController_;
        ctrl = $componentController('profile', null, bindings);
    }));

    describe('model', function () {
        it('should have firstname and lastname bindings', function () {
            expect(ctrl.firstname).toBe('Ugrasenan');
            expect(ctrl.lastname).toBe('Vellaichamy');
        });
    });
});