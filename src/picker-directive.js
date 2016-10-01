(function(angular) {
  'use strict';

  angular.module('nDaterangepicker')
    .directive('shorthandDateRangePicker', function($log) {
      'ngInject';
      $log.warn('shorthandDateRangePicker directive might not work as expected!');

      return {
        restrict: 'E',
        scope: {
          identifier: '@',
          name: '@',
          withBtn: '@',
          resetable: '@',
          model: '=',
          options: '@'
        },
        template: function(tElement, tAttrs) {
          var template = '<input type="text" id="{{identifier}}" class="form-control" name="{{name}}" ng-model="model" options="options" date-range-picker />';

          if (tAttrs.withBtn == "true") {
            template = '' +
              '<div class="input-group date-range-picker">' +
              template +
              '<span class="input-group-btn">' +
              '<label type="button" class="btn btn-default date" for="{{identifier}}">' +
              '<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>' +
              '</label>' +
              '</span>';
          }
          else {
            template = '' +
              '<div class="date-range-picker">' +
              template;
          }

          if (tAttrs.resetable == "true") {
            template += '<div class="input-group">' +
              '<button type="button" class="btn btn-link" title="Reset" ng-click="reset()" ng-show="model.startDate != null">Reset</button>' +
              '</div>';
          }

          template += '</div>';

          return template;
        },
        link: function(scope) {
          scope.reset = function() {
            scope.$broadcast(scope.identifier + 'Reset');
          };
        }
      };
    });
})(angular);