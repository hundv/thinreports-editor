goog.provide('thin.element.Abstract');

goog.require('goog.graphics.StrokeAndFillElement');
goog.require('goog.ui.Component');
goog.require('goog.ui.IdGenerator');


thin.element.Abstract = function(container) {
  goog.base(this, null, container, null, null);
};
goog.inherits(thin.element.Abstract, goog.graphics.StrokeAndFillElement);

thin.element.Abstract.prototype.id_;
thin.element.Abstract.prototype.parent_;
thin.element.Abstract.prototype.inDocument_ = false;
thin.element.Abstract.prototype.wasDecorated_ = false;

thin.element.Abstract.prototype.left_ = 0;
thin.element.Abstract.prototype.top_ = 0;
thin.element.Abstract.prototype.width_ = 0;
thin.element.Abstract.prototype.height_ = 0;

thin.element.Abstract.prototype.setParent = goog.ui.Component.prototype.setParent;
thin.element.Abstract.prototype.getParent = goog.ui.Component.prototype.getParent;
thin.element.Abstract.prototype.setId = goog.ui.Component.prototype.setId;
thin.element.Abstract.prototype.getId = goog.ui.Component.prototype.getId;
thin.element.Abstract.prototype.idGenerator_ = goog.ui.IdGenerator.getInstance();

thin.element.Abstract.prototype.isInDocument = goog.ui.Component.prototype.isInDocument;
thin.element.Abstract.prototype.render_ = goog.ui.Component.prototype.render_;

thin.element.Abstract.prototype.enterDocument = goog.nullFunction;
thin.element.Abstract.prototype.exitDocument = goog.nullFunction;
thin.element.Abstract.prototype.createDom = goog.abstractMethod;

thin.element.Abstract.prototype.getElement = function() {
  if (!this.element_) {
    this.createDom();
  }

  return this.element_;
};
thin.element.Abstract.prototype.getStrokeWidth = function() {
  var stroke = this.getStroke();
  if (stroke) {
    // if (!goog.isNull(strokeOpacity) && Number(strokeOpacity) == 0) {
    //   return 0;
    // } else {
      return stroke.getWidth();
    // }
  } else {
    return null;
  }
};
thin.element.Abstract.prototype.getStrokeColor = function() {
  var stroke = this.getStroke();
  if (stroke) {
    // TODO: none
    return stroke.getColor();
  } else {
    return '';
  }
};
// thin.element.Abstract.prototype.getStrokeOpacity = function() {
  // var strokeOpacity = this.getLayout().getElementAttribute(this.getElement(), 'stroke-opacity');
// }
thin.element.Abstract.prototype.setStrokeColor = function(color, opt_width) {
  var width = this.getStrokeWidth();
  if (goog.isDefAndNotNull(opt_width) && !goog.string.isEmpty(opt_width)) {
    opt_width = Number(opt_width);
    if (!isNaN(opt_width)) {
      width = opt_width;
    }
  }

  color = /** @type {string} */(thin.getValIfNotDef(color, ''));
  var stroke = new goog.graphics.Stroke(width,
    thin.isExactlyEqual(color, '') ? 'none' : color);

  this.setStroke(stroke);
};
thin.element.Abstract.prototype.setStrokeWidth = function(width, opt_color) {
  var color = this.getStrokeColor();
  if (goog.isDefAndNotNull(opt_color) && !goog.string.isEmpty(opt_color)) {
    color = opt_color;
  }

  this.setStrokeColor(color, width);
};


thin.element.Abstract.prototype.getFillColor = function() {
  var fill = this.getFill();
  if (fill) {
    // TODO: none
    return fill.getColor();
  } else {
    return '';
  }
};
thin.element.Abstract.prototype.getFillOpacity = function() {
  var fill = this.getFill();
  if (fill) {
    return fill.getOpacity();
  } else {
    return 1.0;
  }
};
thin.element.Abstract.prototype.setFillColor = function(color, opt_opacity) {
  var opacity = this.getFillOpacity();
  if (goog.isDefAndNotNull(opt_opacity) && !goog.string.isEmpty(opt_opacity)) {
    opt_opacity = Number(opt_opacity);
    if (!isNaN(opt_opacity)) {
      opacity = opt_opacity;
    }
  }

  color = /** @type {string} */(thin.getValIfNotDef(color, ''));
  var fill = new goog.graphics.SolidFill(
    thin.isExactlyEqual(color, '') ? 'none' : color, opacity);

  this.setFill(fill);
};
thin.element.Abstract.prototype.setFillOpacity = function(opacity, opt_color) {
  var color = this.getFillColor();
  if (goog.isDefAndNotNull(opt_color) && !goog.string.isEmpty(opt_color)) {
    color = opt_color;
  }

  this.setFillColor(color, opacity);
};
thin.element.Abstract.prototype.getWorkspace = function() {
  return this.getContainer().getWorkspace();
};
thin.element.Abstract.prototype.getContainer = function() {
  return this.getGraphics();
};
thin.element.Abstract.prototype.setLeft = function(value) {
  this.left_ = thin.numberWithPrecision(value);
};
thin.element.Abstract.prototype.setTop = function(value) {
  this.top_ = thin.numberWithPrecision(value);
};
thin.element.Abstract.prototype.setWidth = function(value) {
  this.width_ = thin.numberWithPrecision(value);
};
thin.element.Abstract.prototype.setHeight = function(value) {
  this.height_ = thin.numberWithPrecision(value);
};
thin.element.Abstract.prototype.update = function(attrs) {
  goog.object.forEach(attrs, function(value, attr) {
    switch (attr) {
      case 'id':
        // this.setShapeId(value);
        break;
      case 'description':
        // this.setDesc(value);
        break;
      case 'x':
        this.setLeft(value);
        break;
      case 'y':
        this.setTop(value);
        break;
      case 'width':
        this.setWidth(value);
        break;
      case 'height':
        this.setHeight(value);
        break;
      case 'display':
        // this.setDisplay(value);
        break;
      case 'border-color':
        this.setStrokeColor(value);
        break;
      case 'border-width':
        this.setStrokeWidth(value);
        break;
      case 'border-style':
        // this.setStrokeDashFromType(value);
        break;
      case 'fill-color':
        this.setFillColor(value);
        break;
      case 'fill-opacity':
        this.setFillOpacity(value);
        break;
      case 'style':
        // this.update(value);
        break;
      default:
        // Do Nothing
        break;
      }

  }, this);
};
thin.element.Abstract.prototype.getAttributes = function() {
  var style = {};

  // var stroke = this.getStroke();
  // if (stroke) {
  //   goog.object.extend(style, {
  //     'border-color': stroke.getColor(),
  //     'border-width': this.getStrokeWidth(),
  //     'border-style': this.getStrokeDashType()
  //   });
  // }
  // var fill = this.getFill();
  // if (fill) {
  //   goog.object.set(style, 'fill-color', fill.getColor());
  // }

  return {
    // 'id': this.getShapeId(),
    // 'type': this.getType(),
    // 'display': this.getDisplay(),
    // 'description': this.getDesc(),
    // Absolute positions(without translate)
    'x': this.left_,
    'y': this.top_,
    'width': this.width_,
    'height': this.height_,
    'style': style
  };

};
