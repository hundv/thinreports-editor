goog.provide('thin.section.Margin');


goog.require('thin.section.Abstract');
goog.require('thin.element.Line');

thin.section.Margin = function(container) {
  goog.base(this, container);
};
goog.inherits(thin.section.Margin, thin.section.Abstract);

thin.section.Margin.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.addChildWithId(new thin.element.Line(this.getContainer()), 'left', true);
  this.addChildWithId(new thin.element.Line(this.getContainer()), 'top', true);
  this.addChildWithId(new thin.element.Line(this.getContainer()), 'right', true);
  this.addChildWithId(new thin.element.Line(this.getContainer()), 'bottom', true);
};
thin.section.Margin.prototype.update = function(attrs) {
  var height = 800;
  var width = 500;

  var top = 20;
  var left = 30;
  var bottom = height - 40;
  var right = width - 50;

  var values = {
    'left': {
      'x1': left,
      'y1': 0,
      'x2': left,
      'y2': height
    },
    'top': {
      'x1': 0,
      'y1': top,
      'x2': width,
      'y2': top
    },
    'right': {
      'x1': right,
      'y1': 0,
      'x2': right,
      'y2': height
    },
    'bottom': {
      'x1': 0,
      'y1': bottom,
      'x2': width,
      'y2': bottom
    }
  };

  this.forEachChild(function(child, i) {
    var attrs = values[child.getId()];
    goog.object.extend(attrs, {
      'border-width': 0.5,
      'border-color': '#BBBBBB'
    });
    goog.bind(function() {
      this.update(attrs);
    }, child)();
  }, this);
};
