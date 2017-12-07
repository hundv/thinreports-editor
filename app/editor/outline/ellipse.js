goog.provide('thin.outline.Ellipse');


goog.require('thin.outline.Abstract');

thin.outline.Ellipse = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.outline.Ellipse, thin.outline.Abstract);

thin.outline.Ellipse.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChild(new thin.element.Ellipse(this.getContainer()), true);
};
