(function () {
  'use strict';

  describe('Module: nDaterangepicker', function () {
    var $scope, $compile;

    beforeEach(module('nDaterangepicker'));

    beforeEach(inject(function($rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
    }));

    function compileElement(elementString, scope) {
      var element = angular.element(elementString);

      $compile(element)(scope);
      scope.$digest();

      return element;
    }

    describe('Directive: pickerDate', function() {
      it('should represent single calendar date field', function() {
        var template = '<picker-date></picker-date>';
        var compiledTemplate = compileElement(template, $scope);

        expect(compiledTemplate.html()).to.equal('<div>123</div>');
      });
    });
  });
})();