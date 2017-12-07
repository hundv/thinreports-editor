goog.provide('thin.shape.Rect');


goog.require('thin.shape.Abstract');

thin.shape.Rect = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.shape.Rect, thin.shape.Abstract);

thin.shape.Rect.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChild(new thin.element.Rect(this.getContainer()), true);
};
