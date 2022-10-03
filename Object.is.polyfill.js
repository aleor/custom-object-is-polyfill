/**
 * Object.is() polyfill without using any of built-in methods.
 * Thanks to the great course by @getify (Kyle Simpson)
 */

if (!Object.is) {
  Object.is = function ObjectIs(v1, v2) {
    function isNegativeZero(value) {
      return value === 0 && 1 / value === -Infinity;
    }

    function isItNaN(value) {
      return value !== value;
    }

    if (isNegativeZero(v1) || isNegativeZero(v2)) {
      return isNegativeZero(v1) && isNegativeZero(v2);
    }

    if (isItNaN(v1) && isItNaN(v2)) {
      return true;
    }

    return v1 === v2;
  };
}
