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
    .service('DateRangePickerService', function() {
      this.startDate;
      this.endDate;
      this.minDate;
      this.maxDate;
      this.dateLimit = false;
      this.timeZone = moment().utcOffset();
      this.showDropdowns = false;
      this.yearDecrement = 20;
      this.yearIncrement = 20;
      this.showWeekNumbers = false;
      this.timePicker = false;
      this.timePickerIncrement = 30;
      this.timePicker12Hour = false;
      this.timePickerSeconds = false;
      this.ranges = false;
      this.opens = 'right'; // 'left'/'right'/'center'
      this.drops = 'down'; // 'down'/'up'
      this.buttonClasses = ['btn', 'btn-small btn-sm'];
      this.applyClass = 'btn-success';
      this.cancelClass = 'btn-default';
      this.format = 'MM/DD/YYYY';
      this.formatMask = '^[0-1][0-9]\/[0-3][0-9]\/[0-9]{4}$';

      this.isoFormat = 'YYYY-MM-DDTHH:mm:ssZ';

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

      this.setYearDecrement = function(yearDecrement) {
        this.yearDecrement = yearDecrement;

        return this;
      };

      this.getYearDecrement = function() {
        return this.yearDecrement;
      };

      this.setYearIncrement = function(yearIncrement) {
        this.yearIncrement = yearIncrement;

        return this;
      };

      this.getYearIncrement = function() {
        return this.yearIncrement;
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

      this.setDrops = function(drops) {
        this.drops = drops;

        return this;
      };

      this.getDrops = function() {
        return this.drops;
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

      this.setFormatMask = function(formatMask) {
        this.formatMask = formatMask;

        return this;
      };

      this.getFormatMask = function() {
        return this.formatMask;
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
        return (PropertyUtil()).getProperties(this);
      };
    });
})(angular);