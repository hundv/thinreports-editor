goog.provide('thin.section.Enumerator');


/**
 * @constructor
 */
thin.section.Enumerator = function() {

  /**
   * @type {Array}
   * @private
   */
  this.factors_ = [];

  /**
   * @type {Array.<number>}
   * @private
   */
  // this.identifiers_ = [];
};


/**
 * @param {string} identifier
 * @return {number}
 * @private
 */
thin.section.Enumerator.prototype.makeKey_ = function(identifier) {
  return Number(identifier.replace(/[^\d]+/g, ''));
};


/**
 * @param {Object} factor
 */
thin.section.Enumerator.prototype.add = function(factor) {
  goog.array.insert(this.factors_, factor);
  // this.identifiers_[this.identifiers_.length] = this.makeKey_(factor.getIdentifier());
};


// /**
//  * @param {number} index
//  * @return {Object}
//  */
// thin.section.Enumerator.prototype.get = function(index) {
//   return this.all()[index];
// };


/**
 * @param {*} factor
 */
thin.section.Enumerator.prototype.remove = function(factor) {
  goog.array.remove(this.factors_, factor);
  // goog.array.remove(this.identifiers_, this.makeKey_(factor.getIdentifier()));
};


/**
 * @return {Array}
 */
thin.section.Enumerator.prototype.all = function() {
  return this.factors_;
};


thin.section.Enumerator.prototype.each = function(call_fn, opt_obj) {
  goog.array.forEach(this.factors_, function(factor, i, factors) {
    // respond_to all
    if (factor instanceof thin.section.Enumerator) {
      factor.each(call_fn, opt_obj);
    } else {
      // TODO Scope apply? goog.bind?
      call_fn.call(/** @type {?} */ (opt_obj), factor, i, factors);
    }
  }, this);
};
