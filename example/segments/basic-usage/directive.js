'use strict';

angular.module('app')
  .directive('basicUsage', function() {
    return {
      restrict: 'E',
      templateUrl: 'segments/basic-usage/template.html',
      scope: {},
      controller: function($scope) {
        $scope.vm = {
          identifier: 'nDate',
          name: 'nDate',
          options: {
            identifier: 'nDate',
            format: 'DD.MM.YYYY'
          },
          model: undefined
          /*model: {
           startDate: '01.01.2014',
           endDate: '01.01.2014'
           }*/

          /*$scope.$watch('vm', function(newDateRange, oldDateRange) {
           console.groupCollapsed();
           console.info('Old date range (nDate):');
           console.log(oldDateRange);

           console.info('New date range (nDate):');
           console.log(newDateRange);
           console.groupEnd();
           }, true);*/
        };
      },
      link: function($scope) {
      }
    };
  });