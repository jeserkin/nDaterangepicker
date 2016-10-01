(function(angular) {
  'use strict';

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
    .service('DateRangePickerLocaleService', function() {
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
        return (PropertyUtil()).getProperties(this);
      };
    });
})(angular);