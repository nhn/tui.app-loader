/**
 * @fileoverview Utility
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var utils = {
  /**
  * Create a new function that, when called, has its this keyword set to the provided value.
  * @param {function} fn A original function before binding
  * @param {*} obj context of function in arguments[0]
  * @returns {function()} A new bound function with context that is in arguments[1]
  */
  bind: function(fn, obj) {
    var slice = Array.prototype.slice;
    var args;

    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }

    args = slice.call(arguments, 2);

    return function() {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  }
};

module.exports = utils;
