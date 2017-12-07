goog.provide('thin.shape.Ellipse');


goog.require('thin.shape.Abstract');

thin.shape.Ellipse = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.shape.Ellipse, thin.shape.Abstract);

thin.shape.Ellipse.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChild(new thin.element.Ellipse(this.getContainer()), true);
};
