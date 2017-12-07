goog.provide('thin.element.Group');
goog.provide('thin.element.Rect');
goog.provide('thin.element.Line');
goog.provide('thin.element.Ellipse');

goog.require('thin.element.Abstract');


thin.element.Group = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.element.Group, thin.element.Abstract);

thin.element.Group.prototype.createDom = function() {
  this.element_ = this.getContainer().createElement('g');
};

thin.element.Rect = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.element.Rect, thin.element.Abstract);

thin.element.Rect.prototype.createDom = function() {
  this.element_ = this.getContainer().createElement('rect');
};


thin.element.Rect.prototype.radius_;


thin.element.Rect.prototype.setLeft = function(value) {
  this.left_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('x', this.left_);
};
thin.element.Rect.prototype.setTop = function(value) {
  this.top_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('y', this.top_);
};
thin.element.Rect.prototype.setWidth = function(value) {
  this.width_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('width', this.width_);
};
thin.element.Rect.prototype.setHeight = function(value) {
  this.height_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('height', this.height_);
};


thin.element.Line = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.element.Line, thin.element.Abstract);

thin.element.Line.DIRECTION = {
  TOP_TO_BOTTOM: 0x01,
  BOTTOM_TO_TOP:  0x02
};

thin.element.Line.prototype.createDom = function() {
  this.element_ = this.getContainer().createElement('line');
};
thin.element.Line.prototype.direction_;
thin.element.Line.prototype.calculateDirection = function(y1, y2) {
  var direction = thin.element.Line.DIRECTION;
  return y1 <= y2 ? direction.TOP_TO_BOTTOM : directionType.BOTTOM_TO_TOP;
};
thin.element.Line.prototype.getDirection = function() {
  if (!this.direction_) {
    this.direction_ = this.calculateDirection(this.y1_, this.y2_);
  }
  return this.direction_;
};
thin.element.Line.prototype.isTopToBottom = function() {
  return this.getDirection() == thin.element.Line.DIRECTION.TOP_TO_BOTTOM;
};
thin.element.Line.prototype.setX1 = function(value) {
  this.x1_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('x1', this.x1_);
};
thin.element.Line.prototype.setX2 = function(value) {
  this.x2_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('x2', this.x2_);
};
thin.element.Line.prototype.setY1 = function(value) {
  this.y1_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('y1', this.y1_);
};
thin.element.Line.prototype.setY2 = function(value) {
  this.y2_ = thin.numberWithPrecision(value);
  this.getElement().setAttribute('y2', this.y2_);
};
thin.element.Line.prototype.setLeft = function(value) {
  this.left_ = thin.numberWithPrecision(value);
  this.setX1(this.left_);
  this.setX2(this.left_ + this.getWidth());
};
thin.element.Line.prototype.setTop = function(value) {
  this.top_ = thin.numberWithPrecision(value);

  if (this.isTopToBottom()) {
    var y1 = this.top_;
    var y2 = this.top_ + this.getHeight();
  } else {
    var y1 = this.top_ + this.getHeight();
    var y2 = this.top_;
  }

  this.setY1(y1);
  this.setY2(y2);
};
thin.element.Line.prototype.setWidth = function(value) {
  this.width_ = thin.numberWithPrecision(value);
  this.setX2(this.getLeft() + this.width_);
};
thin.element.Line.prototype.setHeight = function(value) {
  this.height_ = thin.numberWithPrecision(value);
  this.setTop(this.getTop());
};
thin.element.Line.prototype.getLeft = function() {
  if (!goog.isNumber(this.left_)) {
    this.left_ = Math.min(this.x1_, this.x2_);
  }

  return goog.base(this, 'getLeft');
};
thin.element.Line.prototype.getTop = function() {
  if (!goog.isNumber(this.top_)) {
    this.top_ = Math.min(this.y1_, this.y2_);
  }

  return goog.base(this, 'getTop');
};
thin.element.Line.prototype.getWidth = function() {
  if (!goog.isNumber(this.width_)) {
    this.width_ = Math.abs(this.x1_ - this.x2_);
  }

  return goog.base(this, 'getWidth');
};
thin.element.Line.prototype.getHeight = function() {
  if (!goog.isNumber(this.height_)) {
    this.height_ = Math.abs(this.y1_ - this.y2_);
  }

  return goog.base(this, 'getHeight');
};
thin.element.Line.prototype.update = function(attrs) {
  goog.base(this, 'update', attrs);
  goog.object.forEach(attrs, function(value, attr) {
    switch (attr) {
      case 'x1':
        this.setX1(value);
        break;
      case 'y1':
        this.setY1(value);
        break;
      case 'x2':
        this.setX2(value);
        break;
      case 'y2':
        this.setY2(value);
        break;
      default:
        // Do Nothing
        break;
      }
  }, this);
};


thin.element.Ellipse = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.element.Ellipse, thin.element.Abstract);

thin.element.Ellipse.prototype.createDom = function() {
  this.element_ = this.getContainer().createElement('ellipse');
};

thin.element.Ellipse.prototype.cx_ = 0;
thin.element.Ellipse.prototype.cy_ = 0;
thin.element.Ellipse.prototype.rx_ = 0;
thin.element.Ellipse.prototype.ry_ = 0;

/**
 * @param {number} left
 */
thin.element.Ellipse.prototype.setLeft = function(left) {
  left = thin.numberWithPrecision(left);
  this.left_ = left;

  this.setCx(left + this.rx_);
};


/**
 * @param {number} cx
 */
thin.element.Ellipse.prototype.setCx = function(cx) {
  cx = thin.numberWithPrecision(cx, 2);
  this.cx_ = cx;

  this.getElement().setAttribute('cx', cx);
};


/**
 * @param {number} top
 */
thin.element.Ellipse.prototype.setTop = function(top) {
  top = thin.numberWithPrecision(top);
  this.top_ = top;

  this.setCy(top + this.ry_);
};


/**
 * @param {number} cy
 */
thin.element.Ellipse.prototype.setCy = function(cy) {
  cy = thin.numberWithPrecision(cy, 2);
  this.cy_ = cy;

  this.getElement().setAttribute('cy', cy);
};


/**
 * @param {number} width
 */
thin.element.Ellipse.prototype.setWidth = function(width) {
  width = thin.numberWithPrecision(width);
  this.width_ = width;

  this.setRx(width / 2);
};


/**
 * @param {number} rx
 */
thin.element.Ellipse.prototype.setRx = function(rx) {
  rx = thin.numberWithPrecision(rx, 2)
  this.rx_ = rx;

  this.getElement().setAttribute('rx', rx);
};


/**
 * @param {number} height
 */
thin.element.Ellipse.prototype.setHeight = function(height) {
  height = thin.numberWithPrecision(height);
  this.height_ = height;

  this.setRy(height / 2);
};


/**
 * @param {number} ry
 */
thin.element.Ellipse.prototype.setRy = function(ry) {
  ry = thin.numberWithPrecision(ry, 2);
  this.ry_ = ry;
  this.getElement().setAttribute('ry', ry);
};


thin.element.Ellipse.prototype.resetTop = function() {
  if ((goog.isNumber(this.ry_) && this.ry_ != 0) &&
    (goog.isNumber(this.cy_) && this.cy_ != 0)) {

    this.top_ = thin.numberWithPrecision(this.cy_ - this.ry_);
  }
};


thin.element.Ellipse.prototype.resetLeft = function() {
  if ((goog.isNumber(this.rx_) && this.rx_ != 0) &&
    (goog.isNumber(this.cx_) && this.cx_ != 0)) {

    this.left_ = thin.numberWithPrecision(this.cx_ - this.rx_);
  }
};


thin.element.Ellipse.prototype.resetWidth = function() {
  if (goog.isNumber(this.rx_) && this.rx_ != 0) {

    this.width_ = thin.numberWithPrecision(this.rx_ * 2);
  }
};


thin.element.Ellipse.prototype.resetHeight = function() {
  if (goog.isNumber(this.ry_) && this.ry_ != 0) {

    this.height_ = thin.numberWithPrecision(this.ry_ * 2);
  }
};


/**
 * Update the center point of the ellipse.
 * @param {number} cx Center X coordinate.
 * @param {number} cy Center Y coordinate.
 */
thin.element.Ellipse.prototype.setCenter = function(cx, cy) {
  this.setCx(cx);
  this.setCy(cy);

  this.resetLeft();
  this.resetTop();
};

thin.element.Ellipse.prototype.update = function(attrs) {
  // goog.object.remove(object, 'x');
  // goog.object.remove(object, 'y');
  // goog.object.remove(object, 'width');
  // goog.object.remove(object, 'height');

  goog.base(this, 'update', attrs);
  goog.object.forEach(attrs, function(value, attr) {
    switch (attr) {
      case 'rx':
        this.setRx(value);
        this.resetLeft();
        this.resetWidth();
        break;
      case 'ry':
        this.setRy(value);
        this.resetTop();
        this.resetHeight();
        break;
      case 'cx':
        this.setCx(value);
        this.resetLeft();
        break;
      case 'cy':
        this.setCy(value);
        this.resetTop();
        break;
      default:
        // Do Nothing
        break;
      }
  }, this);
};

thin.element.Ellipse.prototype.getAttributes = function() {
  var attrs = goog.base(this, 'getAttributes');

  goog.object.set(attrs, 'cx', this.cx_);
  goog.object.set(attrs, 'cy', this.cy_);

  goog.object.set(attrs, 'rx', this.rx_);
  goog.object.set(attrs, 'ry', this.ry_);

  return attrs;
};
