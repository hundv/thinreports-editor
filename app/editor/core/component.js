goog.provide('thin.core.Component');


goog.require('thin.element.Group');

goog.require('goog.fx.Dragger');
goog.require('goog.ui.Component');

/**
 * @param {Element} element
 * @param {thin.section.Abstract} container
 * @constructor
 * @extends {goog.graphics.StrokeAndFillElement}
 */
thin.core.Component = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.core.Component, thin.element.Group);

thin.core.Component.attributes;

thin.core.Component.prototype.googUiComponentHandler_;
thin.core.Component.prototype.children_;
thin.core.Component.prototype.childIndex_;
thin.core.Component.prototype.forEachChild = goog.ui.Component.prototype.forEachChild;

thin.core.Component.prototype.addChild = goog.ui.Component.prototype.addChild;
thin.core.Component.prototype.addChildAt = goog.ui.Component.prototype.addChildAt;
thin.core.Component.prototype.addChildWithId = function(child, opt_id, opt_render) {
  if (opt_id) {
    child.setId(opt_id);
  }
  this.addChild(child, opt_render);

  return child;
};

thin.core.Component.prototype.getChild = goog.ui.Component.prototype.getChild;
thin.core.Component.prototype.getChildAt = goog.ui.Component.prototype.getChildAt;
thin.core.Component.prototype.getChildCount = goog.ui.Component.prototype.getChildCount;

thin.core.Component.prototype.removeChild = goog.ui.Component.prototype.removeChild;
thin.core.Component.prototype.removeChildAt = goog.ui.Component.prototype.removeChildAt;
thin.core.Component.prototype.removeChildren = goog.ui.Component.prototype.removeChildren;

thin.core.Component.prototype.getContentElement = function() {
  return this.getElement();
};

thin.core.Component.prototype.getHandler = goog.ui.Component.prototype.getHandler;
thin.core.Component.prototype.createDom = function() {
  goog.base(this, 'createDom');
  this.createChild();
};
thin.core.Component.prototype.createChild = function() {};


thin.core.Component.prototype.enterDocument = function() {
  this.inDocument_ = true;

  this.forEachChild(function(child) {
    if (!child.isInDocument() && child.getElement()) {
      child.enterDocument();
    }
  });

  var element = this.getElement();
  var dragger = new goog.fx.Dragger(element);
  var handler = this.getHandler();

  handler.
    listen(element, goog.events.EventType.CLICK, this.handleSingleClick).
    listen(element, goog.events.EventType.DBLCLICK, this.handleDoubleClick).
    listen(element, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).
    listen(element, goog.events.EventType.MOUSEUP, this.handleMouseUp).
    listen(element, goog.events.EventType.MOUSEOVER, this.handleMouseOver).
    listen(element, goog.events.EventType.MOUSEOUT, this.handleMouseOut).
    listen(element, goog.events.EventType.MOUSEMOVE, this.handleMouseMove);

  if (this.isDraggable()) {
    handler.
      listen(dragger, goog.fx.Dragger.EventType.EARLY_CANCEL, this.handleDragCancel).
      listen(dragger, goog.fx.Dragger.EventType.START, this.handleDragStart).
      listen(dragger, goog.fx.Dragger.EventType.BEFOREDRAG, this.handleBeforeDrag).
      listen(dragger, goog.fx.Dragger.EventType.DRAG, this.handleDragging).
      listen(dragger, goog.fx.Dragger.EventType.END, this.handleDragEnd);

    this.dragger_ = dragger;
  }

};

thin.core.Component.prototype.dragger_;
thin.core.Component.prototype.dragging_;
thin.core.Component.prototype.draggable_ = true;
thin.core.Component.prototype.setDraggable = function(draggable) {
  this.draggable_ = !!draggable;
};
thin.core.Component.prototype.isDraggable = function() {
  return this.draggable_;
};

thin.core.Component.prototype.getHandlePosition = function(e, keyCode) {
  var bounds = this.getContainer().getElement().getBoundingClientRect();

  return new goog.math.Coordinate(e.clientX - bounds.left, e.clientY - bounds.top);
};

thin.core.Component.prototype.getHandleKeyCode = function(e) {
  var event = e.browserEvent;
  return {
    ALT: event.altKey,
    SHIFT: event.shiftKey,
    CTRL: event.ctrlKey
  };
};
thin.core.Component.prototype.handleSingleClick = function(e) {};
thin.core.Component.prototype.handleDoubleClick = function(e) {};
thin.core.Component.prototype.handleMouseDown = function(e) {};
thin.core.Component.prototype.handleMouseUp = function(e) {};
thin.core.Component.prototype.handleMouseOver = function(e) {};
thin.core.Component.prototype.handleMouseOut = function(e) {};
thin.core.Component.prototype.handleMouseMove = function(e) {};

thin.core.Component.prototype.handleDragCancel = function(e) {
  var keyCode = this.getHandleKeyCode(e);
  var position = this.getHandlePosition(e, keyCode);

  this.handleCancelDrag(position, keyCode);
  this.dragging_ = null;
};

thin.core.Component.prototype.isStartDrag = function(position, keyCode) {
  return true;
};
thin.core.Component.prototype.handleStartDrag = function(position, keyCode) {
  console.log('handleStartDrag', position, keyCode);
};
thin.core.Component.prototype.handleCancelDrag = function(position, keyCode) {
  console.log('handleCancelDrag', position, keyCode);
};
thin.core.Component.prototype.handleDragStart = function(e) {
  var keyCode = this.getHandleKeyCode(e);
  var position = this.getHandlePosition(e, keyCode);

  if (this.isStartDrag(position, keyCode)) {
    this.dragging_ = position;
    this.handleStartDrag(position, keyCode);
    return true;
  } else {
    this.handleCancelDrag(position, keyCode);
    this.dragging_ = null;
    return false;
  }
};

thin.core.Component.prototype.handleBeforeDrag = function(e) {};

thin.core.Component.prototype.handleDrag = function(position, keyCode) {
  console.log('handleDrag', position, keyCode);
};
thin.core.Component.prototype.handleDragging = function(e) {
  var keyCode = this.getHandleKeyCode(e);
  var position = this.getHandlePosition(e, keyCode);

  this.handleDrag(position, keyCode);
};

thin.core.Component.prototype.isClick = function(ep, keyCode) {
  var sp = this.dragging_;
  if (sp && ep) {
    return goog.math.Coordinate.equals(sp, ep);
  } else {
    return false;
  }
};
thin.core.Component.prototype.handleEndClick = function(position, keyCode) {
  console.log('handleEndClick', position, keyCode);
};
thin.core.Component.prototype.handleEndDrag = function(position, keyCode) {
  console.log('handleEndDrag', position, keyCode);
};
thin.core.Component.prototype.handleDragEnd = function(e) {
  var keyCode = this.getHandleKeyCode(e);
  var position = this.getHandlePosition(e, keyCode);

  if (this.isClick(position, keyCode)) {
    this.handleEndClick(position, keyCode);
  } else {
    this.handleEndDrag(position, keyCode);
  }
  this.dragging_ = null;
};

thin.core.Component.prototype.exitDocument = goog.ui.Component.prototype.exitDocument;
thin.core.Component.prototype.exitDocument = goog.ui.Component.prototype.disposeInternal;

thin.core.Component.prototype.update = function(attrs) {
  this.forEachChild(function(child, i) {
    goog.bind(function() {
      this.update(attrs);
    }, child)();
  }, this);
};
thin.core.Component.prototype.destroy = function() {
  this.dispose();
};
thin.core.Component.prototype.commit = function(attrs) {
  // this.update(attrs);
  // this.active();
};
thin.core.Component.prototype.active = function() {
  this.active_ = true;
};
thin.core.Component.prototype.inactive = function() {
  this.active_ = false;
};

thin.core.Component.prototype.getAttributes = function() {
  var attrs = {};
  this.forEachChild(function(child, i) {
    goog.bind(function() {
      goog.object.extend(attrs, this.getAttributes());
    }, child)();
  }, this);

  return attrs;
};
