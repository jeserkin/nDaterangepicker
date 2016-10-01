(function (angular) {
  'use strict';

  angular.module('nDaterangepicker')
    .directive('pickerDate', function() {
      return {
        restrict: 'E',
        templateUrl: 'fragments/picker-date.html',
        scope: {},
        link: postLinkFn
      };

      function postLinkFn(scope) {
        init();

        ///////

        function init() {

        }
      }
    });
})(angular);