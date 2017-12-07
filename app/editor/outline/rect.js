goog.provide('thin.outline.Rect');


goog.require('thin.outline.Abstract');

thin.outline.Rect = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.outline.Rect, thin.outline.Abstract);

thin.outline.Rect.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChild(new thin.element.Rect(this.getContainer()), true);
};
