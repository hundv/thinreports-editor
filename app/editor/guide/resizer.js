goog.provide('thin.guide.resizer');
goog.provide('thin.guide.resizer.Abstract');
goog.provide('thin.guide.resizer.TopLeft');
goog.provide('thin.guide.resizer.TopCenter');
goog.provide('thin.guide.resizer.TopRight');

goog.provide('thin.guide.resizer.Container');

goog.require('thin.core.Component');


thin.guide.resizer.Abstract = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.guide.resizer.Abstract, thin.core.Component);

thin.guide.resizer.Abstract.prototype.createChild = function() {
  // TODO list
  this.resizer = thin.element.Ellipse(this.getContainer());
  this.addChild(this.resizer, true);
};

thin.guide.resizer.Abstract.prototype.vertical_ = null;
thin.guide.resizer.Abstract.prototype.horizon_ = null;

thin.guide.resizer.Abstract.prototype.update = function(attrs) {
  switch(this.vertical_) {
    case thin.guide.resizer.Container.VERTICAL.TOP:
      break;

    case thin.guide.resizer.Container.VERTICAL.MIDDLE:
      break;

    case thin.guide.resizer.Container.VERTICAL.BOTTOM:
      break;
  }

  switch(this.horizon_) {
    case thin.guide.resizer.Container.HORIZON.LEFT:
      break;

    case thin.guide.resizer.Container.HORIZON.CENTER:
      break;

    case thin.guide.resizer.Container.HORIZON.RIGHT:
      break;
  }

  goog.base(this, 'update', attrs);
};

thin.guide.resizer.TopLeft = function(container) {
  this.vertical_ = thin.guide.resizer.Container.VERTICAL.TOP;
  this.horizon_ = thin.guide.resizer.Container.HORIZON.LEFT;

  goog.base(this, container);
};
goog.inherits(thin.guide.resizer.TopLeft, thin.guide.resizer.Abstract);


thin.guide.resizer.TopCenter = function(container) {
  this.vertical_ = thin.guide.resizer.Container.VERTICAL.TOP;
  this.horizon_ = thin.guide.resizer.Container.HORIZON.CENTER;

  goog.base(this, container);
};
goog.inherits(thin.guide.resizer.TopCenter, thin.guide.resizer.Abstract);



thin.guide.resizer.TopRight = function(container) {
  this.vertical_ = thin.guide.resizer.Container.VERTICAL.TOP;
  this.horizon_ = thin.guide.resizer.Container.HORIZON.RIGHT;

  goog.base(this, container);
};
goog.inherits(thin.guide.resizer.TopRight, thin.guide.resizer.Abstract);


thin.guide.resizer.Container = function(container) {
  this.draggable_ = false;
  goog.base(this, container);
};
goog.inherits(thin.guide.resizer.Container, thin.core.Component);

thin.guide.resizer.Container.VERTICAL = {
  TOP: 0x00,
  MIDDLE: 0x01,
  BOTTOM: 0x02
}

thin.guide.resizer.Container.HORIZON = {
  LEFT: 0x03,
  CENTER: 0x04,
  RIGHT: 0x05
}


thin.guide.resizer.Container.prototype.createChild = function() {
  console.log('createChild', this.getContainer());
  window.hogehoge = this;

  this.top_left = new thin.guide.resizer.TopLeft(this.getContainer());
  this.top_center = new thin.guide.resizer.TopCenter(this.getContainer());
  this.top_right = new thin.guide.resizer.TopRight(this.getContainer());

  this.addChild(this.top_left, true);
  this.addChild(this.top_center, true);
  this.addChild(this.top_right, true);
};
