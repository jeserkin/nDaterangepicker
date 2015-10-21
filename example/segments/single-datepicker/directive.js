'use strict';

angular.module('app')
  .directive('singleDatepicker', function() {
    return {
      restrict: 'E',
      templateUrl: 'segments/single-datepicker/template.html',
      scope: {},
      controller: function($scope) {
        $scope.vm = {
          identifier: 'nDateSingle',
          name: 'nDateSingle',
          options: {
            identifier: 'nDateSingle',
            format: 'DD.MM.YYYY',
            showDropdowns: true,
            type: 'moment'
          },
          //model: null
          model: '02.01.2014'
          /*model: {
           startDate: null,
           filldate: null
           }*/
        };

        /*$scope.$watch('nDateSingle', function(newDateRange, oldDateRange) {
         //console.groupCollapsed();
         console.info('Old date range (nDateSingle):');
         console.log(oldDateRange);
         if (moment.isMoment(oldDateRange.model)) {
         console.log('Moment date: ' + oldDateRange.model.format('DD.MM.YYYY'));
         }

         console.info('New date range (nDateSingle):');
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