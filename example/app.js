'use strict';

angular.module('app', ['nDaterangepicker'])
  .controller('AngularCtrl', function($scope, DateRangePickerLocaleService, DateRangePickerService) {
    DateRangePickerLocaleService.setFromLabel('Since');

    $scope.nDate = {
      identifier: 'nDate',
      name: 'nDate',
      options: {
        identifier: 'nDate',
        format: 'dd.mm.yyyy',
      },
      model: {
        startDate: '01.01.2014',
        endDate: '01.01.2014'
      }
    };

    $scope.nDateShort = {
      identifier: 'nDateShort',
      name: 'nDateShort',
      options: {
        identifier: 'nDateShort',
        format: 'dd.mm.yyyy',
        locale: {
          toLabel: 'Till'
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

    $scope.nDateSingle = {
      identifier: 'nDateSingle',
      name: 'nDateSingle',
      options: {
        identifier: 'nDateSingle',
        format: 'dd.mm.yyyy',
        singleDatePicker: true,
        showDropdowns: true
      },
      model: {
        startDate: '01.01.2014',
        endDate: '01.01.2014'
      }
    };

    $scope.reset = function(identifier) {
      $scope.$broadcast(identifier + 'Reset');
    };

    $scope.$watch('nDate', function(newDateRange, oldDateRange) {
      console.info('Old date range (nDate):');
      console.log(oldDateRange);

      console.info('New date range (nDate):');
      console.log(newDateRange);
    }, true);

    $scope.$watch('nDateShort', function(newDateRange, oldDateRange) {
      console.info('Old date range (nDateShort):');
      console.log(oldDateRange);

      console.info('New date range (nDateShort):');
      console.log(newDateRange);
    }, true);

    $scope.$watch('nDateSingle', function(newDateRange, oldDateRange) {
      console.info('Old date range (nDateSingle):');
      console.log(oldDateRange);

      console.info('New date range (nDateSingle):');
      console.log(newDateRange);
    }, true);
  })
  .controller('jQueryCtrl', function($scope) {
    $scope.jqueryDate = {

    };

    // Basic Date Range Picker
    $('#basic').daterangepicker(null, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });

    // Basic Single Date Picker
    $('#basicSingle').daterangepicker({singleDatePicker: true}, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });

    // Date Range & Time Picker with 30 Minute Increments
    $('#dateAndTimeRangePicker').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      format: 'MM/DD/YYYY h:mm A'
    }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });

    // Options Usage
    var cb = function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
      $('#optionsContainer span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    };

    var optionSetOne = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      minDate: '01/01/2012',
      maxDate: '12/31/2014',
      dateLimit: { days: 60 },
      showDropdowns: true,
      showWeekNumbers: true,
      timePicker: false,
      timePickerIncrement: 1,
      timePicker12Hour: true,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      opens: 'left',
      buttonClasses: ['btn btn-default'],
      applyClass: 'btn-small btn-primary',
      cancelClass: 'btn-small',
      format: 'MM/DD/YYYY',
      separator: ' to ',
      locale: {
        applyLabel: 'Submit',
        cancelLabel: 'Clear',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
      }
    };

    var optionSetTwo = {
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      opens: 'left',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    };

    $('#optionSetOne').click(function(event) {
      $('#optionsContainer').data('daterangepicker').setOptions(optionSetOne, cb);
    });

    $('#optionSetOne').click(function(event) {
      $('#optionsContainer').data('daterangepicker').setOptions(optionSetTwo, cb);
    });

    $('#removeDateRangePicker').click(function(event) {
      $('#optionsContainer').data('daterangepicker').remove();
    });

    $('#optionsContainer span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#optionsContainer').daterangepicker(optionSetOne, cb);

    $('#optionsContainer').on('show.daterangepicker', function() { console.log("show event fired"); });
    $('#optionsContainer').on('hide.daterangepicker', function() { console.log("hide event fired"); });
    $('#optionsContainer').on('apply.daterangepicker', function(ev, picker) {
      console.log("apply event fired, start/end dates are "
        + picker.startDate.format('MMMM D, YYYY')
        + " to "
        + picker.endDate.format('MMMM D, YYYY')
      );
    });
    $('#optionsContainer').on('cancel.daterangepicker', function(ev, picker) { console.log("cancel event fired"); });

    // Plays nicely with Bootstrap dropdowns
    $('#optionsContainerCenter span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#optionsContainerCenter').daterangepicker({
      opens: 'center'
    });
    // @TODO: WIP
    /*function reopenPicker() {
      $('.daterange-close').trigger('click');
      $('#example1').trigger('focus');
    }

    $(window).resize(function() {
      reopenPicker();
    });*/
  });