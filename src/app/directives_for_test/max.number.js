(function () {
  'use strict';

  angular.module('5AutoComplete')
    .directive('maxNumber', maxNumber);

  function maxNumber() {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {

        var maxLimit = parseInt(attrs.maxLimit);

        /*ngModelCtrl.$formatters.push(function (value) {
          if (value) {
            value = value.toString().substring(0, maxLimit);
            console.log('started from $formatters:  substring');
          }
          return +value;
        });*/

        ngModelCtrl.$parsers.push(function (value) {
          if (ngModelCtrl.$viewValue.length > 4) {
            var newValue = ngModelCtrl.$viewValue.substring(0, 4);
            ngModelCtrl.$setViewValue(newValue);
            ngModelCtrl.$render();
            console.log('started from $parsers:  substring');
            return +newValue;
          }
          return value;
        });

        element[0].addEventListener('keydown', function (event) {
          if (this.value.length === maxLimit) {
            event.preventDefault();
          }
        });
      }
    };
  }
})();
