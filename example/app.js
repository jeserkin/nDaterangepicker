'use strict';

angular.module('app', ['ngResource', 'ngSanitize', 'ngDaterangepicker'])
  .controller('jQueryCtrl', function($scope) {
    $scope.jqueryDate = {};

    var settings = {
      //minDate: '15.03.2013',
      format: 'DD.MM.YYYY',
      firstDay: 1,
      //startDate: '18.03.2013',
      //endDate: '23.05.2013',
      showDropdowns: true,
      /*ranges: {
        'Last 7 Days': [moment().subtract(7, 'days').format('DD.MM.YYYY'), moment().format('DD.MM.YYYY')]
      },*/
      opens: 'right',
      buttonClasses: 'nortal-picker',
      applyClass: 'btn btn-small btn-sm btn-success',
      cancelClass: 'btn btn-small btn-sm btn-danger daterange-close'//,
      //singleDatePicker: true
    };

    $('#example1').daterangepicker(angular.extend({}, settings, {parentEl: '#testDel'}), function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });

    /*
    // @TODO: WIP
    function reopenPicker() {
     $('.daterange-close').trigger('click');
      $('#example1').trigger('focus');
     }

     $(window).resize(function() {
      reopenPicker();
     });*/
  })
  .controller('AngularShorthandCtrl', function($scope, DateRangePickerService, DateRangePickerLocaleService) {
    $scope.ngDate = {
      identifier: 'example2',
      name: 'example2',
      options: {
        format: 'dd/MM/yyyy',
        ranges: {
          'Viimased 7 päeva': [moment().subtract(6, 'days'), moment()],
          'Viimased 30 päeva': [moment().subtract(29, 'days'), moment()]
        }
      },
      model: {
        startDate: '01/01/2014',
        endDate: '01/01/2015'
      }
    };
  })
  .controller('AngularCtrl', function($scope, DateRangePickerService) {
    $scope.ngDate = {
      identifier: 'example3',
      name: 'example3',
      options: {
        identifier: 'example3',
        format: 'dd.mm.yyyy',
        //maxDate: moment('31.12.2014', angular.uppercase('dd.mm.yyyy'))
        //maxDate: '31.12.2014',
        locale: {
          toLabel: 'Nii kaua'
        }
      },
      /*model: {
        startDate: moment('01.01.2014', angular.uppercase('dd.mm.yyyy')),
        endDate: moment('01.01.2015', angular.uppercase('dd.mm.yyyy'))
      }*/
      model: {
        startDate: '01.01.2014',
        endDate: '01.01.2014'
      }
      /*model: {
        startDate: null,
        endDate: null
      }*/
    };

    $scope.reset = function(identifier) {
      $scope.$broadcast(identifier + 'Reset');
    };

    $scope.$watch('ngDate', function(newDateRange, oldDateRange) {
      console.info('Old date range:');
      console.log(oldDateRange);

      console.info('New date range:');
      console.log(newDateRange);
    }, true);
  });