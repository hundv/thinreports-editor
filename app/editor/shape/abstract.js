goog.provide('thin.shape.Abstract');


goog.require('thin.core.Component');


thin.shape.Abstract = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.shape.Abstract, thin.core.Component);

thin.shape.Abstract.prototype.active = function() {
  // this.guide = new thin.guide.Rect(this.getContainer());
  // this.getContainer().resizeElement.appendChild(this.guide.getElement());
  // this.guide.update(this.getAttributes());

  console.log('this.getAttributes()', this.getAttributes());

  this.active_ = true;
};
thin.shape.Abstract.prototype.inactive = function() {

  this.active_ = false;
};
