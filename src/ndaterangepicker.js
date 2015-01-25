'use strict';

(function(angular) {
  angular.module('nDaterangepicker', [])
    .factory('PropertyUtil', PropertyUtil);

  function PropertyUtil() {
    var getProperties = function(obj) {
      var result = {};

      for (var property in obj) {
        if (obj.hasOwnProperty(property) && typeof obj[property] != 'function') {
          result[property] = obj[property];
        }
      }

      return result;
    };

    return {
      getProperties: function(obj) {
        return getProperties(obj);
      }
    };
  }

  angular.module('nDaterangepicker')
    .service('DateRangePickerLocaleService', DateRangePickerLocaleService);

  function DateRangePickerLocaleService(PropertyUtil) {
    this.applyLabel = 'Apply';
    this.cancelLabel = 'Cancel';
    this.fromLabel = 'From';
    this.toLabel = 'To';
    this.weekLabel = 'W';
    this.customRangeLabel = 'Custom Range';
    this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.firstDay = 0;

    this.setApplyLabel = function(applyLabel) {
      this.applyLabel = applyLabel;

      return this;
    };

    this.getApplyLabel = function() {
      return this.applyLabel;
    };

    this.setCancelLabel = function(cancelLabel) {
      this.cancelLabel = cancelLabel;

      return this;
    };

    this.getCancelLabel = function() {
      return this.cancelLabel;
    };

    this.setFromLabel = function(fromLabel) {
      this.fromLabel = fromLabel;

      return this;
    };

    this.getFromLabel = function() {
      return this.fromLabel;
    };

    this.setToLabel = function(toLabel) {
      this.toLabel = toLabel;

      return this;
    };

    this.getToLabel = function() {
      return this.toLabel;
    };

    this.setWeekLabel = function(weekLabel) {
      this.weekLabel = weekLabel;

      return this;
    };

    this.getWeekLabel = function() {
      return this.weekLabel;
    };

    this.setCustomRangeLabel = function(customRangeLabel) {
      this.customRangeLabel = customRangeLabel;

      return this;
    };

    this.getCustomRangeLabel = function() {
      return this.customRangeLabel;
    };

    this.setDaysOfWeek = function(daysOfWeek) {
      this.daysOfWeek = daysOfWeek;

      return this;
    };

    this.getDaysOfWeek = function() {
      return this.daysOfWeek;
    };

    this.setMonthNames = function(monthNames) {
      this.monthNames = monthNames;

      return this;
    };

    this.getMonthNames = function() {
      return this.monthNames;
    };

    this.setFirstDay = function(firstDay) {
      this.firstDay = firstDay;

      return this;
    };

    this.getFirstDay = function() {
      return this.firstDay;
    };

    this.getList = function() {
      return PropertyUtil.getProperties(this);
    };
  }

  angular.module('nDaterangepicker')
    .service('DateRangePickerService', DateRangePickerService);

  function DateRangePickerService(PropertyUtil) {
    this.startDate;
    this.endDate;
    this.minDate;
    this.maxDate;
    this.dateLimit = false;
    this.timeZone = null;
    this.showDropdowns = false;
    this.showWeekNumbers = false;
    this.timePicker = false;
    this.timePickerIncrement = 30;
    this.timePicker12Hour = false;
    this.timePickerSeconds = false;
    this.ranges = false;
    this.opens = 'right'; // 'left'/'right'/'center'
    this.buttonClasses = ['btn', 'btn-small btn-sm'];
    this.applyClass = 'btn-success';
    this.cancelClass = 'btn-default';
    this.format = 'MM/DD/YYYY';
    this.separator = ' - ';
    this.singleDatePicker = false;
    this.parentEl = '';

    this.iconBtnClasses = [];

    this.type = 'string';
    this.availableDateTypes = ['string', 'date', 'moment'];

    this.setStartDate = function(startDate) {
      this.startDate = startDate;

      return this;
    };

    this.getStartDate = function() {
      return this.startDate;
    };

    this.setEndDate = function(endDate) {
      this.endDate = endDate;

      return this;
    };

    this.getEndDate = function() {
      return this.endDate;
    };

    this.setMinDate = function(minDate) {
      this.minDate = minDate;

      return this;
    };

    this.getMinDate = function() {
      return this.minDate;
    };

    this.setMaxDate = function(maxDate) {
      this.maxDate = maxDate;

      return this;
    };

    this.getMaxDate = function() {
      return this.maxDate;
    };

    this.setDateLimit = function(dateLimit) {
      this.dateLimit = dateLimit;

      return this;
    };

    this.getDateLimit = function() {
      return this.dateLimit;
    };

    this.setTimeZone = function(timeZone) {
      this.timeZone = timeZone;

      return this;
    };

    this.getTimeZone = function() {
      return this.timeZone;
    };

    this.setShowDropdowns = function(showDropdowns) {
      this.showDropdowns = showDropdowns;

      return this;
    };

    this.isShowDropdowns = function() {
      return this.showDropdowns;
    };

    this.setShowWeekNumbers = function(showWeekNumbers) {
      this.showWeekNumbers = showWeekNumbers;

      return this;
    };

    this.isShowWeekNumbers = function() {
      return this.showWeekNumbers;
    };

    this.setTimePicker = function(timePicker) {
      this.timePicker = timePicker;

      return this;
    };

    this.isTimePicker = function() {
      return this.timePicker;
    };

    this.setTimePickerIncrement = function(timePickerIncrement) {
      this.timePickerIncrement = timePickerIncrement;

      return this;
    };

    this.getTimePickerIncrement = function() {
      return this.timePickerIncrement;
    };

    this.setTimePicker12Hour = function(timePicker12Hour) {
      this.timePicker12Hour = timePicker12Hour;

      return this;
    };

    this.isTimePicker12Hour = function() {
      return this.timePicker12Hour;
    };

    this.setTimePickerSeconds = function(timePickerSeconds) {
      this.timePickerSeconds = timePickerSeconds;

      return this;
    };

    this.isTimePickerSeconds = function() {
      return this.timePickerSeconds;
    };

    this.addRange = function(rangeName, range) {
      this.ranges[rangeName] = range;

      return this;
    };

    this.setRanges = function(ranges) {
      this.ranges = ranges;

      return this;
    };

    this.getRanges = function() {
      return this.ranges;
    };

    this.setOpens = function(opens) {
      this.opens = opens;

      return this;
    };

    this.getOpens = function() {
      return this.opens;
    };

    this.addButtonClass = function(buttonClass) {
      this.buttonClasses.push(buttonClass);

      return this;
    };

    this.setButtonClasses = function(buttonClasses) {
      this.buttonClasses = buttonClasses;

      return this;
    };

    this.getButtonClasses = function() {
      return this.buttonClasses;
    };

    this.setApplyBtnClass = function(applyClass) {
      this.applyClass = applyClass;

      return this;
    };

    this.getApplyBtnClass = function() {
      return this.applyClass;
    };

    this.setCancelBtnClass = function(cancelClass) {
      this.cancelClass = cancelClass;

      return this;
    };

    this.getCancelBtnClass = function() {
      return this.cancelClass;
    };

    this.setFormat = function(format) {
      this.format = angular.uppercase(format);

      return this;
    };

    this.getFormat = function() {
      return this.format;
    };

    this.setSeparator = function(separator) {
      this.separator = separator;

      return this;
    };

    this.getSeparator = function() {
      return this.separator;
    };

    this.setParentEl = function(parentEl) {
      this.parentEl = parentEl;

      return this;
    };

    this.getParentEl = function() {
      return this.parentEl;
    };

    this.addIconBtnClass = function(iconBtnClass) {
      this.iconBtnClasses.push(iconBtnClass);

      return this;
    };

    this.setIconBtnClasses = function(iconBtnClasses) {
      this.iconBtnClasses = iconBtnClasses;

      return this;
    };

    this.getIconBtnClasses = function() {
      return this.iconBtnClasses;
    };

    this.setType = function(type) {
      if (this.isValidDateType(type)) {
        this.type = type;
      }

      return this;
    };

    this.isValidDateType = function(type) {
      if (-1 == this.availableDateTypes.indexOf(type)) {
        throw new TypeError('Got type (' + type + ') and expected one of the following (' + this.availableDateTypes.join(',') + ')');
      }
      return true;
    };

    this.getType = function() {
      return this.type;
    };

    this.getList = function() {
      return PropertyUtil.getProperties(this);
    };
  }

  angular.module('nDaterangepicker')
    .directive('shorthandDateRangePicker', shorthandDateRangePicker);

  function shorthandDateRangePicker() {
    return {
      restrict: 'E',
      scope: {
        identifier: '@',
        name: '@',
        withBtn: '@',
        resetable: '@',
        model: '=',
        options: '='
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
      link: function(scope, iElement, iAttrs, controller, transcludeFn) {
        scope.reset = function() {
          scope.$broadcast(scope.identifier + 'Reset');
        };
      }
    };
  }

  angular.module('nDaterangepicker')
    .directive('dateRangePicker', dateRangePicker);

  function dateRangePicker($timeout, DateRangePickerService, DateRangePickerLocaleService) {
    return {
      restrict: 'A',
      require: '^ngModel',
      scope: {
        options: '='
      },
      controller: function($scope, $element, $attrs, $transclude) {
        var locale = angular.extend({}, DateRangePickerLocaleService.getList());

        if ($scope.options && $scope.options.locale) {
          locale = angular.extend(locale, $scope.options.locale);
          delete $scope.options.locale;
        }

        $scope.internalOptions = angular.extend({}, DateRangePickerService.getList(), {locale: locale}, $scope.options);

        DateRangePickerService.isValidDateType($scope.internalOptions.type);
      },
      link: function(scope, iElement, iAttrs, ngModelCtrl, transcludeFn) {
        var el = angular.element(iElement),
          _init,
          _getPicker,
          _setViewValue,
          _setIsSingleDatePicker,

          _formatted,
          _getMoment,
          _toType,
          _getDateToSet,

          _validate,
          _validateMin,
          _validateMax,
          _isEmpty;

        // Set as readonly. No need for user to interact with it other than through UI (input fields present inside)
        if (typeof el.attr('readonly') === 'undefined') {
          el.attr('readonly', 'readonly');
        }

        // Reset date
        if (scope.options && scope.options.identifier) {
          scope.$on(scope.options.identifier + 'Reset', function(event) {
            return $timeout(function() {
              return scope.$apply(function() {
                var picker = _getPicker(),
                  dateToSet = _getDateToSet();

                picker.setStartDate(dateToSet.format(scope.internalOptions.format));
                picker.setEndDate(dateToSet.format(scope.internalOptions.format));

                _setViewValue(null, null);

                return ngModelCtrl.$render();
              });
            });
          });
        }

        ngModelCtrl.$formatters.push(function(value) {
          _setIsSingleDatePicker(value);
          _init();

          var _setRange = function(startDate, endDate) {
            var picker = _getPicker();

            if (!_getMoment(startDate).isValid()) {
              throw new Error('Either invalid startDate was passed or invalid format. Please check!');
            }

            if (!_getMoment(endDate).isValid()) {
              throw new Error('Either invalid endDate was passed or invalid format. Please check!');
            }

            picker.setStartDate(startDate);
            picker.setEndDate(endDate);
          };

          if (_isEmpty(value)) {
            var dateToSet = _getDateToSet();
            _setRange(dateToSet, dateToSet);

            return '';
          }
          else {
            if (scope.internalOptions.singleDatePicker) {
              _setRange(value, value);
            }
            else {
              _setRange(value.startDate, value.endDate);
            }

            return value;
          }
        });

        ngModelCtrl.$parsers.push(function(value) {
          if (scope.internalOptions.singleDatePicker) {
            return value;
          }
          else if (!angular.isObject(value) || !(value.hasOwnProperty('startDate') && value.hasOwnProperty('endDate'))) {
            return ngModelCtrl.$modelValue;
          }

          return value;
        });

        ngModelCtrl.$isEmpty = function(value) {
          return _isEmpty(value);
        };

        ngModelCtrl.$render = function() {
          if (!ngModelCtrl.$modelValue) {
            return el.val('');
          }
          if (ngModelCtrl.$modelValue.startDate === null) {
            return el.val('');
          }

          _validate(ngModelCtrl.$modelValue);

          return el.val(_formatted(ngModelCtrl.$modelValue));
        };

        _init = function() {
          return el.daterangepicker(scope.internalOptions, function(start, end, label) {
            return $timeout(function() {
              return scope.$apply(function() {
                _setViewValue(start, end);

                return ngModelCtrl.$render();
              });
            });
          });
        };

        _getPicker = function() {
          return el.data('daterangepicker');
        };

        _setViewValue = function(startDate, endDate) {
          if (!scope.internalOptions.singleDatePicker) {
            ngModelCtrl.$setViewValue({
              startDate: startDate !== null ? _toType(startDate) : null,
              endDate: endDate !== null ? _toType(endDate) : null
            });
          }
          else {
            ngModelCtrl.$setViewValue(startDate !== null ? _toType(startDate) : null);
          }
        };

        _setIsSingleDatePicker = function(value) {
          if (value) {
            scope.internalOptions.singleDatePicker = !value.hasOwnProperty('startDate') && !value.hasOwnProperty('endDate');
          }
          else {
            scope.internalOptions.singleDatePicker = true;
          }
        };

        _formatted = function(viewVal) {
          var f = function(date) {
              return _getMoment(date).format(scope.internalOptions.format);
            },
            result = '';

          if (scope.internalOptions.singleDatePicker) {
            result = f(viewVal);
          }
          else {
            result = [f(viewVal.startDate), f(viewVal.endDate)].join(scope.internalOptions.separator);
          }

          return result;
        };

        _getMoment = function(date) {
          if (moment.isMoment(date)) {
            return date;
          }
          else {
            var result;

            if (date instanceof Date) {
              result = moment(date);
            }
            else {
              result = moment(date, scope.internalOptions.format);
            }

            return result;
          }
        };

        _toType = function(date) {
          var momentObj = _getMoment(date);

          switch (scope.internalOptions.type) {
            case 'moment': {
              return momentObj;
            }

            case 'date': {
              return momentObj.toDate();
            }

            default:
            case 'string': {
              return momentObj.format(scope.internalOptions.format);
            }
          }
        };

        _getDateToSet = function() {
          var dateToSet,
            currentDate = moment(),
            maxDate = scope.internalOptions.maxDate,
            minDate = scope.internalOptions.minDate;

          if (maxDate && typeof maxDate != "undefined" && currentDate.isAfter(maxDate)) {
            dateToSet = _getMoment(maxDate);
          }
          else if (minDate && typeof minDate != "undefined" && currentDate.isBefore(minDate)) {
            dateToSet = _getMoment(minDate);
          }
          else {
            dateToSet = currentDate;
          }

          return dateToSet;
        };

        _validate = function(value) {
          var startDate = typeof value.startDate != 'undefined' ? value.startDate : value,
            endDate = typeof value.endDate != 'undefined' ? value.endDate : value;

          if (scope.internalOptions.minDate && startDate) {
            _validateMin(scope.internalOptions.minDate, startDate);
          } else {
            ngModelCtrl.$setValidity('minDate', true);
          }
          if (scope.internalOptions.maxDate && endDate) {
            _validateMax(scope.internalOptions.maxDate, endDate);
          } else {
            ngModelCtrl.$setValidity('maxDate', true);
          }
        };

        _validateMin = function(min, start) {
          var valid;

          min = _getMoment(min);
          start = _getMoment(start);
          valid = min.isBefore(start) || min.isSame(start, 'day');
          ngModelCtrl.$setValidity('minDate', valid);

          return valid;
        };

        _validateMax = function(max, end) {
          var valid;

          max = _getMoment(max);
          end = _getMoment(end);
          valid = max.isAfter(end) || max.isSame(end, 'day');
          ngModelCtrl.$setValidity('maxDate', valid);

          return valid;
        };

        _isEmpty = function(value) {
          return !value || (value.startDate === null || value.endDate === null);
        };

        el.on('apply.daterangepicker', function(event, picker) {
          return $timeout(function() {
            return scope.$apply(function() {
              _setViewValue(picker.startDate, picker.endDate);

              return ngModelCtrl.$render();
            });
          });
        });

        el.keyup(function(e) {
          if (e.keyCode == 27) { // esc
            _getPicker().hide();
          }
        });
      }
    };
  }
})(angular);