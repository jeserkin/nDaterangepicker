'use strict';

angular.module('app')
  .directive('datepickerWithComparison', function() {
    return {
      restrict: 'E',
      templateUrl: 'segments/datepicker-with-comparison/template.html',
      scope: {},
      controller: function($scope) {
        $scope.vmStart = {
          identifier: 'nDateRangepickerComparisonStart',
          name: 'nDateRangepickerComparisonStart',
          model: undefined,
          options: {
            format: 'DD.MM.YYYY',
            identifier: 'nDateRangepickerComparisonEnd'/*,
            type: 'moment'*/
          }
        };

        $scope.vmEnd = {
          identifier: 'nDateRangepickerComparisonEnd',
          name: 'nDateRangepickerComparisonEnd',
          model: undefined,
          options: {
            format: 'DD.MM.YYYY',
            identifier: 'nDateRangepickerComparisonEnd'/*,
            type: 'moment'*/
          }
        };

        /*$scope.$watch('vmStart', function(newDateRange, oldDateRange) {
          //console.groupCollapsed();
          console.info('Old date range (nDateRangepickerComparison):');
          console.log(oldDateRange);
          if (moment.isMoment(oldDateRange.model)) {
            console.log('Moment date: ' + oldDateRange.model.format('DD.MM.YYYY'));
          }

          console.info('New date range (nDateRangepickerComparison):');
          console.log(newDateRange);
          if (moment.isMoment(newDateRange.model)) {
            console.log('Moment date: ' + newDateRange.model.format('DD.MM.YYYY'));
          }

          //console.groupEnd();
          console.log('=====================');
        }, true);


        $scope.$watch('vmEnd', function(newDateRange, oldDateRange) {
          //console.groupCollapsed();
          console.info('Old date range (nDateRangepickerComparison):');
          console.log(oldDateRange);
          if (moment.isMoment(oldDateRange.model)) {
            console.log('Moment date: ' + oldDateRange.model.format('DD.MM.YYYY'));
          }

          console.info('New date range (nDateRangepickerComparison):');
          console.log(newDateRange);
          if (moment.isMoment(newDateRange.model)) {
            console.log('Moment date: ' + newDateRange.model.format('DD.MM.YYYY'));
          }

          //console.groupEnd();
          console.log('=====================');
        }, true);*/
      },
      link: function($scope) {
      }
    };
  });