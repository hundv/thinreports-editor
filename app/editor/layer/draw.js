goog.provide('thin.layer.Draw');


goog.require('thin.layer.Abstract');

thin.layer.Draw = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.layer.Draw, thin.layer.Abstract);


thin.layer.Draw.prototype.isStartDrag = function(position, keyCode) {
  var value = this.getWorkspace().getToolBoxValue();
  // rect, ellipse, line, text, image, tblock, iblock, pagenumber, list
  return !!value && ('selector' != value && 'zoom' != value);
};

thin.layer.Draw.prototype.handleStartDrag = function(position, keyCode) {
  var outline = null;
  switch(this.getWorkspace().getToolBoxValue()) {
    case 'rect':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'ellipse':
      outline = new thin.outline.Ellipse(this.getContainer());
      break;
    case 'line':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'text':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'image':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'tblock':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'iblock':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'pagenumber':
      outline = new thin.outline.Rect(this.getContainer());
      break;
    case 'list':
      outline = new thin.outline.Rect(this.getContainer());
      break;
  };

  this.outline = outline;

  this.getContainer().outlineElement.appendChild(this.outline.getElement());
  this.outline.setParent(this);
  this.outline.update({
    'x': position.x,
    'y': position.y,
    'width': 0,
    'height': 0,
    'fill-color': '#FFFFFF'
  });

  // console.log('handleStartDrag', position, keyCode);
};
// thin.layer.Draw.prototype.handleCancelDrag = function(position, keyCode) {
//   console.log('handleCancelDrag', position, keyCode);
// };
//
thin.layer.Draw.prototype.handleDrag = function(position, keyCode) {
  var x = Math.min(this.dragging_.x, position.x);
  var y = Math.min(this.dragging_.y, position.y);
  var width = Math.abs(position.x - this.dragging_.x);
  var height = Math.abs(position.y - this.dragging_.y);

  console.log('dragging', {
    'x': x,
    'y': y,
    'width': width,
    'height': height
  });

  this.outline.update({
    'x': x,
    'y': y,
    'width': width,
    'height': height
  });
};

//
// thin.layer.Draw.prototype.handleEndClick = function(position, keyCode) {
//   console.log('handleEndClick', position, keyCode);
// };
thin.layer.Draw.prototype.handleEndDrag = function(position, keyCode) {
  var shape = null;
  switch(this.getWorkspace().getToolBoxValue()) {
    case 'rect':
      shape = new thin.shape.Rect(this.getContainer());
      break;
    case 'ellipse':
      shape = new thin.shape.Ellipse(this.getContainer());
      break;
  };

  this.getParent().addChild(shape, true);

  shape.update(this.outline.getAttributes());
  this.outline.destroy();
  shape.active();
};
