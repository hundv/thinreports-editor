goog.provide('thin.layer.Abstract');

goog.require('thin.core.Component');


thin.layer.Abstract = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.layer.Abstract, thin.core.Component);


thin.layer.Abstract.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChild(new thin.element.Rect(this.getContainer()), true);
};
