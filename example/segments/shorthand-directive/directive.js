'use strict';

angular.module('app')
  .directive('shorthandDirective', function() {
    return {
      restrict: 'E',
      templateUrl: 'segments/shorthand-directive/template.html',
      scope: {},
      controller: function($scope) {
        $scope.vm = {
          identifier: 'nDateShort',
          name: 'nDateShort',
          options: {
            identifier: 'nDateShort',
            format: 'DD.MM.YYYY',
            locale: {
              toLabel: 'Till'
            }
          },
          /*model: {
           startDate: moment('01.01.2014', angular.uppercase('dd.mm.yyyy')),
           endDate: moment('01.01.2015', angular.uppercase('dd.mm.yyyy'))
           }*/
          model: '01.01.2014'
          /*model: {
           startDate: '01.01.2014',
           endDate: '01.01.2014'
           }*/
          /*model: {
           startDate: null,
           endDate: null
           }*/
        };

        /*$scope.$watch('vm', function(newDateRange, oldDateRange) {
         console.groupCollapsed();
         console.info('Old date range (nDateShort):');
         console.log(oldDateRange);

         console.info('New date range (nDateShort):');
         console.log(newDateRange);
         console.groupEnd();
         }, true);*/
      },
      link: function($scope) {
      }
    };
  });