'use strict';

angular.module('app')
  .directive('additionalDatepickerDirective', function() {
      return {
        restrict: 'E',
        templateUrl: 'segments/additional-datepicker-directive/template.html',
        scope: {},
        controller: function($scope) {
          $scope.nDatepicker = {
            identifier: 'nDatepicker',
            model: null,
            options: {}
          };
        },
        link: function($scope) {
        }
      };
    });

angular.module('app')
  .directive('nDatepicker', function(config) {
    return {
      restrict: 'E',
      scope: {
        identifier: '@',
        name: '@',
        model: '=',
        options: '@'
      },
      templateUrl: 'templates/date-picker.html',
      controller: function($scope) {
        $scope.forwardOptions = angular.extend({}, {
          format: config.dateFormat,
          singleDatePicker: true
        }, $scope.options);

        if ($scope.identifier && $scope.identifier.length) {
          $scope.forwardOptions.identifier = $scope.identifier;
        }

        $scope.resetIdentifier = $scope.forwardOptions.identifier;
        $scope.forwardOptions = angular.toJson($scope.forwardOptions);

        $scope.vm = {
          model: $scope.model
        };
      },
      link: function(scope) {
        scope.reset = function() {
          scope.$broadcast(scope.resetIdentifier + 'Reset');
        };

        scope.$watch('vm', function(newValue) {
          scope.model = newValue.model;
        }, true);
      }
    };
  });