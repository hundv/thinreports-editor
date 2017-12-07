goog.provide('thin.guide.Abstract');

goog.require('thin.core.Component');


thin.guide.Abstract = function(container) {
  this.draggable_ = false;

  goog.base(this, container);
};
goog.inherits(thin.guide.Abstract, thin.core.Component);
